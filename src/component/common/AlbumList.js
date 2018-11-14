import React,{Component} from 'react'
import {ScrollView} from 'react-native'
import AlbumDetail from './AlbumDetail'
export default class AlbumList extends Component{
    state = {
        albums : [
            {'title':'taylor Swift','id':'0','artist':'Taylor Swift'},
            {'title':'lionel nortey','id':'1','artist':'Griffin'},
            {'title':'Jenny Meg','id':'2','artist':'Griffin'},
            {'title':'Griffin Doe','id':'3','artist':'Griffin'}

        ],
        cardHeader: 'welcome Jennifer'
    }
    componentWillMount(){
        /*
       axios('https://rallycoding.herokuapp.com/api/music_albums').then((response)=>{
            this.setState({albums : response.data})
            
        }).catch((err)=>{
            alert(err)
        }) 
        */
    }
    renderAlbum(){
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album}/>
        );
    }
    render(){
        //console.warn(this.state.albums)
        return(
            <ScrollView>
                {this.renderAlbum()}
            </ScrollView>
        )

    }
}
