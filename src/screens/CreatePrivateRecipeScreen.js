import { CheckBox } from "@rneui/base";
import { Icon, Input } from "@rneui/themed"
import { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import ModalSelector from "react-native-modal-selector";
import { useDispatch, useSelector } from "react-redux";
import { fetchFood } from "../redux/FoodSlice";
import Modal from "react-native-modal";
import { FillButton } from "../components/atoms/FillButton";
import { OutlineButton } from "../components/atoms/OutlineButton";
import * as ImagePicker from 'expo-image-picker';
import { Image } from "react-native";
import { MiniButton } from "../components/atoms/MiniButton";

export const CreatePrivateRecipeScreen = () => {
    const [recipeName, setRecipeName] = useState("");
    const [time, setTime] = useState(""); //所要時間
    const [category, setCategory] = useState(null);
    const [materialNum, setMaterialNum] = useState([]); //材料の一時的な個数を保持
    const [units, setUnits] = useState([]); //材料の一時的な個ユニットを保持
    const [materials, setMaterials] = useState([]);
    const [howToCook, setHowToCook] = useState([""]);
    const [isOkPublic, setisOkPublic] = useState(false);
    const [isMaterialModalOpen, setIsMaterialModalOpen] = useState(false);
    const [image, setImage] = useState();
    const dispatch = useDispatch();
    const food = useSelector((state) => state.food);
    const foodList = food.data;
    const currentUser = useSelector((state) => state.currentUser).data;

    useEffect(() => {
        dispatch(fetchFood());
    }, [dispatch]);

    let index = 0;
    const times = [
        { key: index++, label: "5分", value: 5 },
        { key: index++, label: "10分", value: 10 },
        { key: index++, label: "15分", value: 15 },
        { key: index++, label: "20分", value: 20 },
        { key: index++, label: "30分", value: 30 },
        { key: index++, label: "40分", value: 40 },
        { key: index++, label: "50分", value: 50 },
        { key: index++, label: "60分以上", value: 60 },
    ];
    const categories = [
        { key: index++, label: "主食", value: 1 },
        { key: index++, label: "主菜", value: 2 },
        { key: index++, label: "副菜", value: 3 },
        { key: index++, label: "汁物", value: 4 },
    ];
    const foodMaterials = [];
    foodList.map((food, i) => {
        foodMaterials.push({
            key: food.ID,
            label: food.Name,
        });
    });

    //送信処理
    const submitRecipe = () => {
        const data = {
            Name: recipeName,
            Cooking_time: time,
            Dish_category: category,
            How_to_cook: JSON.stringify(howToCook),
            Private_flag: 1,
            Is_ok_publick: isOkPublic ? 1 : 0,
            UserId: currentUser.ID,
            Recipe_materials: [],
            Recipe_categories: [],
            Image_key: "",
        }

        const submitData = {
            Image: "",
            Data: data
        }

        const res = fetch("http://18.183.189.68:8080/recipedata/add", {
            method: "post",
            body: JSON.stringify(submitData),
        });

    }

    //作り方をセット
    const onChangeHowTo = (value, index) => {
        let howToText = howToCook;
        howToText[index] = value;
        setHowToCook([...howToText]);
    }

    //材料の個数をセット
    const addFoodNum = (value) => {
        let mat = materialNum;
        mat = { ...mat, ...value };

        setMaterialNum(mat);
    }

    //材料のユニットをセット
    const addUnit = (value) => {
        let uni = units;
        uni = { ...uni, ...value };
        setUnits(uni);
    }

    //材料追加
    const addFood = (food) => {
        const id = food.ID;
        if (!id) {
            return false;
        }
        const selectedFoods = materials;

        let insertValue = {};
        insertValue.FoodID = id;

        //個,g,単位なしで分岐
        if (!materialNum[id]) {
            Alert.alert("量を入力してください。");
            return false;
        }
        else if (food.Unit == 2) {
            insertValue.Quantity = materialNum[id];
            insertValue.Gram = null;
            insertValue.Quantity_label = `${materialNum[id]}個`;
        } else if (food.Unit == 1) {
            insertValue.Quantity = null;
            insertValue.Gram = materialNum[id];
            insertValue.Quantity_label = `${materialNum[id]}g`;
        } else {
            insertValue.Quantity = null;
            insertValue.Gram = null;
            insertValue.Quantity_label = `${materialNum[id]}`;
        }

        if (units[id]) {
            insertValue.Unit = units[id];
        } else {
            insertValue.Unit = null;
        }

        selectedFoods.push(insertValue);

        setMaterials([...new Set(selectedFoods)]);
    }
    //材料削除
    const removeFood = (id) => {
        let selectedFoods = materials;
        selectedFoods = selectedFoods.filter((v) => !String(v.FoodID).match(String(id)));
        setMaterials([...new Set(selectedFoods)]);
    }
    //画像選択
    const pickImage = async () => {

        //許可を取得
        let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        const options = {
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            allowEditing: true,
            aspect: [4, 3],
        };

        //カメラロールから画像選択
        if (status == "granted") {
            let res = await ImagePicker.launchImageLibraryAsync(options);
            if (!res.cancelled) {
                setImage(res.uri);
            }
        }
    }

    // 必要な情報:名前 所要時間 画像 カテゴリ(主菜副菜など) 作り方 材料 (UserId) 公開してもよいか(審査の後に〜文言を入れる)
    return (
        <ScrollView style={styles.container}
            contentContainerStyle={{ alignItems: "center" }}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>新しいレシピを作成しましょう</Text>
            </View>
            <View>
                <OutlineButton
                    title="画像選択"
                    onPress={() => pickImage()}
                />
                <Image
                    style={image ? { height: 200 } : ""}
                    source={{ uri: image }}
                />
            </View>
            <View style={styles.sectionContainer}>
                <Input
                    label="レシピ名"
                    placeholder="入力してください"
                    onChangeText={(val) => setRecipeName(val)}
                />
            </View>
            <View style={styles.dropDownContainer}>
                <Text>所要時間</Text>
                <ModalSelector
                    data={times}
                    initValue={time != "" ? time + "分" : "選択してください"}
                    cancelText={'キャンセル'}
                    onChange={(option) => { setTime(option.value) }}
                    initValueTextStyle={{ color: "#555" }}
                    overlayStyle={styles.overlayStyle}
                    backdropPressToClose={true}
                    optionContainerStyle={styles.optionContainerStyle}
                    optionStyle={styles.optionStyle}
                    optionTextStyle={styles.optionTextStyle}
                    cancelStyle={styles.cancelStyle}
                    cancelTextStyle={styles.cancelTextStyle}
                    sectionTextStyle={styles.sectionTextStyle}
                    sectionStyle={styles.sectionStyle}
                />
            </View>
            <View style={styles.dropDownContainer}>
                <Text>カテゴリ</Text>
                <ModalSelector
                    data={categories}
                    initValue={category ? categories[category - 1].label : "選択してください"}
                    cancelText={'キャンセル'}
                    onChange={(option) => { setCategory(option.value) }}
                    initValueTextStyle={{ color: "#555" }}
                    overlayStyle={styles.overlayStyle}
                    backdropPressToClose={true}
                    optionContainerStyle={styles.optionContainerStyle}
                    optionStyle={styles.optionStyle}
                    optionTextStyle={styles.optionTextStyle}
                    cancelStyle={styles.cancelStyle}
                    cancelTextStyle={styles.cancelTextStyle}
                    sectionTextStyle={styles.sectionTextStyle}
                    sectionStyle={styles.sectionStyle}
                />
            </View>
            <View>
                <OutlineButton
                    title="材料選択"
                    onPress={() => { setIsMaterialModalOpen(true); }}
                />
            </View>
            <View style={styles.sectionContainer}>
                <Text style={{ fontSize: 18 }}>作り方</Text>
                {howToCook.map((val, index) => {
                    return (
                        <View style={{ width: "100%", marginTop: 10 }}>
                            <Text>{index + 1}.</Text>
                            <TextInput
                                key={index}
                                placeholder={"まず、鶏もも肉は食べやすい大きさ（3〜4㎝四方くらい）にカットし..."}
                                multiline={true}
                                numberOfLines={4}
                                style={styles.textarea}
                                scrollEnabled={true}
                                onChangeText={(value) => onChangeHowTo(value, index)}
                            />
                        </View>
                    )
                })}
                <Icon
                    raised
                    name="add"
                    type="material"
                    color="#F06A47"
                    size={20}
                    onPress={() => { onChangeHowTo("", howToCook.length) }}
                />
            </View>
            <View style={styles}>
                <CheckBox
                    center
                    title="レシピを全ユーザーに公開する"
                    onPress={() => setisOkPublic(!isOkPublic)}
                    checked={isOkPublic}
                />
                <Text>※チェックを入れると審査の後に公開させていただきます。</Text>
            </View>
            <View style={styles.submitContainer}>
                <FillButton
                    title="送信"
                    onPress={() => Alert.alert(
                        "",
                        "送信してもよろしいですか？",
                        [
                            {
                                text: "キャンセル",
                            },
                            {
                                text: "送信",
                                onPress: submitRecipe
                            }
                        ]
                    )}
                />
            </View>
            <Modal isVisible={isMaterialModalOpen} scrollEnabled={true} style={{ flex: 1 }} scrollOffset={100} >
                <View
                    style={{ width: "100%", backgroundColor: "#fff", alignItems: "center", borderRadius: 10 }}>
                    <Text style={styles.titleText}>材料選択</Text>
                    {materials.length != 0 &&
                        <>
                            <Text style={{ marginBottom: 5 }}>追加した材料(スクロールして確認できます)</Text>
                            <ScrollView style={{ flexWrap: "wrap", flexDirection: "row", width: "80%", maxHeight: 100, borderWidth: 1, borderRadius: 4, borderColor: "#ccc", padding: 10 }}>
                                {materials.map((material) => {
                                    return (
                                        <Text style={{ color: "#F06A47", marginRight: 5, marginBottom: 3 }}>{foodList.map((v) => {
                                            if (v.ID == material.FoodID) return v.Name
                                        })}
                                            {material.Quantity_label != undefined ? material.Quantity_label : ""}
                                        </Text>
                                    )
                                })}
                            </ScrollView>
                        </>
                    }
                    {materials.length != 0 ?
                        <OutlineButton
                            title="クリア"
                            onPress={() => setMaterials([])}
                        />
                        : ""}
                    <ScrollView style={{ width: "80%", borderWidth: 1, marginBottom: 30, borderRadius: 10, borderColor: '#EFEFF4' }}>
                        {foodList.map((food, i) => {
                            return (
                                <View
                                    key={i}
                                    style={{ width: "100%", flexDirection: "row", height: 40, padding: 3, borderBottomWidth: 1, borderBottomColor: '#EFEFF4', alignItems: "center" }}>
                                    <View style={{ width: "50%", flexDirection: "row", justifyContent: "flex-start" }}>
                                        <Text style={{ color: "#111" }}>{food.Name}</Text>
                                    </View>
                                    <View style={{ width: "20%", flexDirection: "row", justifyContent: "flex-start" }}>
                                        <TextInput
                                            keyboardType={food.Unit != 0 ? "numeric" : "default"}
                                            style={{ width: 40, height: "80%", borderWidth: 1, borderColor: "#ccc", borderRadius: 4, marginRight: 5 }}
                                            onChangeText={(text) => {
                                                addFoodNum({ [food.ID]: text })
                                            }} />

                                        <Text>{food.Unit == 2 ? "個" : (food.Unit == 1 ? "g" : "")}</Text>
                                    </View>
                                    <View style={{ width: "20%", flexDirection: "row", justifyContent: "center" }}>
                                        <TextInput
                                            style={{ width: 20, height: "80%", borderWidth: 1, borderColor: "#ccc", borderRadius: 4 }}
                                            onChangeText={(text) => {
                                                addUnit({ [food.ID]: text })
                                            }} />
                                    </View>
                                    <TouchableOpacity
                                        style={{ width: "10%", flexDirection: "row", justifyContent: "flex-end" }}
                                        onPress={() => {
                                            materials.find(val => val.FoodID == food.ID)
                                                ? removeFood(food.ID)
                                                : addFood(food)
                                        }} >
                                        <Text style={{ color: "#F06A47" }}>{materials.find(val => val.FoodID == food.ID)
                                            ? "削除" : "追加"}</Text>
                                    </TouchableOpacity>

                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
                <View style={styles.modalButtonContainer}>
                    <FillButton
                        color="#F06A47"
                        title="決定"
                        onPress={() => setIsMaterialModalOpen(false)}
                        containerStyle={{ width: 100, marginTop: 20 }}
                    />
                </View>
            </Modal>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#fff",
    },
    titleContainer: {
        margin: 5,
    },
    titleText: {
        fontSize: 18,
        fontWeight: "bold",
        margin: 25,
    },
    sectionContainer: {
        width: "80%",
        marginBottom: 10,
        alignItems: "center",
        marginTop: 10
    },
    textarea: {
        height: 100,
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        padding: 10,
        extAlignVertical: 2,
    },
    dropDownContainer: {
        width: "70%",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    dropDown: {
        width: 180,
        alignItems: "center",
        fontSize: 16,
        height: 30,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#777",
    },
    overlayStyle: {
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    optionContainerStyle: {
        paddingHorizontal: 0,
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    optionStyle: {
        paddingVertical: 13,
        borderBottomWidth: 0.3,
    },
    optionTextStyle: {
        fontSize: 16,
    },
    cancelStyle: {
        paddingVertical: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    cancelTextStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    sectionTextStyle: {
        color: '#EFEFF4',
        fontSize: 16,
    },
    sectionStyle: {
        borderBottomWidth: 0.5,
    },
    submitContainer: {
        margin: 40
    },
    modalButtonContainer: {
        alignItems: "center"
    }

})