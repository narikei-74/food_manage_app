const GetMyRecipeDataService = () => {
  const myRecipeData = [
    {
      name: "サラダ",
      img: require("../../assets/sarada.jpg"),
    },

    {
      name: "煮物",
      img: require("../../assets/nimono.jpg"),
    },

    {
      name: "卵をかけたご飯",
      img: require("../../assets/tamagokakegohan.jpg"),
    },

    {
      name: "味噌汁",
      img: require("../../assets/misoshiru.jpg"),
    },

    {
      name: "唐揚げ",
      img: require("../../assets/karaage.jpg"),
    },
  ];

  return myRecipeData;
};

export default GetMyRecipeDataService;
