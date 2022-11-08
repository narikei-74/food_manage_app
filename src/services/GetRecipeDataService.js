const GetRecipeDataService = () => {
  const RecipeData = [
    {
      name: "唐揚げ",
      img: require("../../assets/images/karaage.jpg"),
    },

    {
      name: "サラダ",
      img: require("../../assets/images/sarada.jpg"),
    },

    {
      name: "煮物",
      img: require("../../assets/images/nimono.jpg"),
    },

    {
      name: "卵をかけたご飯",
      img: require("../../assets/images/tamagokakegohan.jpg"),
    },

    {
      name: "味噌汁",
      img: require("../../assets/images/misoshiru.jpg"),
    },

    {
      name: "卵かけご飯",
      img: require("../../assets/images/tamagokakegohan.jpg"),
    },

    {
      name: "美味しい煮物",
      img: require("../../assets/images/nimono.jpg"),
    },
  ];

  return RecipeData;
};

export default GetRecipeDataService;
