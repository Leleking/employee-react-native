import React from 'react'
import {Text,TouchableOpacity} from 'react-native'

const Button = (props) => {
    return(
        <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
        <Text style={styles.textStyle}>{props.children}</Text>
        </TouchableOpacity>
    )
}
const styles ={
    textStyle:{
        alignSelf:'center',
        color:'white',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom: 10,
    },
    buttonStyle:{
        borderRadius: 10,
        flex:1,
        alignSelf: 'stretch',
        backgroundColor:'#007aff',
        borderWidth: 1,
        borderColor:'#007aff',
        marginLeft: 5,
        marginRight: 5
    }
}
export {Button}
