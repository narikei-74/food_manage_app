import { StyleSheet } from "react-native"

export const OutlineButtonStyle = ()=>{
    return(
        StyleSheet.create({
            button:{
              borderColor:"#FA514B",
              borderRadius: 30,
            },
            title:{
              color:"#FA514B",
              fontSize:14,
            }
          })
    )
}