import { CheckBox } from "@rneui/base";
import { Input } from "@rneui/themed"
import { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import ModalSelector from "react-native-modal-selector";
import { useDispatch, useSelector } from "react-redux";
import { fetchFood } from "../redux/FoodSlice";
import Modal from "react-native-modal";
import { FillButton } from "../components/atoms/FillButton";
import { OutlineButton } from "../components/atoms/OutlineButton";

export const CreatePrivateRecipeScreen = () => {
    const [recipeName, setRecipeName] = useState("");
    const [time, setTime] = useState("");
    const [category, setCategory] = useState(1);
    const [materials, setMaterials] = useState([]);
    const [howToCook, setHowToCook] = useState("");
    const [isOkPublic, setisOkPublic] = useState(false);
    const [isMaterialModalOpen, setIsMaterialModalOpen] = useState(false);
    const dispatch = useDispatch();
    const food = useSelector((state) => state.food);
    const foodList = food.data;

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
        { key: index++, label: "60分", value: 60 },
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
            key: i,
            label: food.Name
        });
    });

    //材料追加
    const addFood = (food) => {
        const selectedFoods = materials;
        selectedFoods.push(food);
        setMaterials([...new Set(selectedFoods)]);
    }
    //材料削除
    const removeFood = (food) => {
        let selectedFoods = materials;
        selectedFoods = selectedFoods.filter((v) => !v.match(food));
        setMaterials([...new Set(selectedFoods)]);
    }

    // 必要な情報:名前 所要時間 画像 カテゴリ(主菜副菜など) 作り方 材料 (UserId) 公開してもよいか(審査の後に〜文言を入れる)
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>新しいレシピを作成しましょう</Text>
            </View>
            <View style={styles.sectionContainer}>
                <Input
                    label="レシピ名"
                    placeholder="入力してください"
                    onChange={(val) => setRecipeName(val)}
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
                <Text>作り方</Text>
                <TextInput
                    placeholder={"1.まず、鶏もも肉は食べやすい大きさ（3〜4㎝四方くらい）にカットし... \n 2.揚げ油を160～170℃に熱し..."}
                    multiline={true}
                    numberOfLines={4}
                    style={styles.textarea}
                    scrollEnabled={true}
                    onChange={(value) => setHowToCook(value)}
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
                                onPress: () => console.log("ここに送信処理を記述")
                            }
                        ]
                    )}
                />
            </View>
            <Modal isVisible={isMaterialModalOpen} scrollEnabled={true} style={{ flex: 1 }} scrollOffset={100} >
                <View
                    style={{ width: "100%", backgroundColor: "#fff", alignItems: "center", borderRadius: 10 }}>
                    <Text style={styles.titleText}>材料選択</Text>

                    <View style={{ flexWrap: "wrap", flexDirection: "row", justifyContent: "space-around", width: "80%", maxHeight: 300, }}>
                        {materials.map((material) => {
                            return (
                                <Text style={{ color: "#F06A47", marginRight: 5, marginBottom: 3 }}>{material}</Text>
                            )
                        })}
                    </View>
                    {materials.length != 0 ?
                        <OutlineButton
                            title="クリア"
                            onPress={() => setMaterials([])}
                        />
                        : ""}
                    <ScrollView style={{ width: "80%", borderWidth: 1, marginBottom: 30, borderRadius: 10, borderColor: '#EFEFF4' }}>
                        {foodMaterials.map((food, i) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        materials.includes(food.label)
                                            ? removeFood(food.label)
                                            : addFood(food.label)
                                    }}
                                    style={{ width: "100%", height: 40, padding: 3, justifyContent: "center", borderBottomWidth: 1, borderBottomColor: '#EFEFF4', alignItems: "center" }}>
                                    <Text style={{ color: "#007AFF" }}>{food.label}</Text>
                                </TouchableOpacity>
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
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
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
    },
    textarea: {
        height: 200,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        padding: 10,
        extAlignVertical: 2
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