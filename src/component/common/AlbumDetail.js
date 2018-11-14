import React from 'react'
import {Text,View,Image,Linking} from 'react-native'
import Card from './card'
import Button from './Button'
import CardSection from './CardSection'
const AlbumDetail = ({album}) =>{
    const {title,artist} = album
    return(
        <Card>  
            <CardSection>
            <View style={styles.thumbnailContainerStyle}>
                <Image style={styles.thumbnailStyle} source={require('../assets/vue-cookbook.png')}></Image>
            </View>
            <View style={styles.headerContentStyle}>
            <Text>{title}</Text>
            <Text>{artist}</Text>
            </View>
            </CardSection>

            <CardSection>
                <Image style={styles.imageStyle} source={require('../assets/vue-cookbook.png')}/>
            </CardSection>

            <CardSection>
                <Button onPress={()=>{Linking.openURL('http://localhost')}}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    )
}
const styles = {
    headerContentStyle:{
        flexDirection: 'column',
        justifyContent: 'space-around', 
        paddingLeft: 20,
    },
    thumbnailStyle:{
        width:50,
        height:50
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems: 'center',
        marginLeft: 20,
    },
    imageStyle:{
        height:150,
        width:null,
        flex:1
    }

}
export default AlbumDetail