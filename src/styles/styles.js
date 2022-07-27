
import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#5359D1",
      alignItems: 'flex-start',
      justifyContent:'flex-start'
    },
    courseTitle:{
        fontSize:20,
        color:"white",
        fontWeight:'bold',
        marginTop:20
    },
    animatedCard:{
        flexGrow:1,
        backgroundColor:'white',
        position:'absolute',
        bottom:0,
        top:0,
        right:0,
        left:0,
        paddingHorizontal:15,
        paddingVertical:20,
    },
    listContainer:{
        width:'50%',
        height:'80%'
    },
    titleDesc:{
        marginVertical:15
    },
    coursetitle:{
        fontSize:25,
        color:'white',
        fontWeight:"bold",
    },
    courseDesc:{
        color:"white"
    }
})
export default styles;