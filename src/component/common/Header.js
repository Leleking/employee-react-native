import React, { Component } from 'react'
import { Text, View } from 'react-native'

const Header = (props) =>{
    return(
        <View style={styles.headerStyle}>
            <Text style={styles.textStyle}>{props.title}</Text>
        </View>
    )
}

const styles = {
    headerStyle:{
        justifyContent:'center',
        backgroundColor: '#F8F8F8',
       alignItems:'center',
       height:70,
       paddingTop:15,
       shadowColor: '#000',
       shadowOffset: {width:0 , height: 2},
       shadowOpacity: 0.2,
       elevation: 8
        
    },
    textStyle:{
        fontSize:40
    }
}
export {Header}