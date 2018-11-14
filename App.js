import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware} from 'redux'
import reducers from './src/reducers'
import ReduxThunk from 'redux-thunk'
import LoginForm from './src/component/LoginForm'
import {Header} from './src/component/common'
import Router from './src/Router.js'
//import LibraryList from './src/component/LibraryList'
import firebase from 'firebase'
export default class App extends React.Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyBSYLDGTIqcOGbSVkVHS0NiSIi4bDO9wjE",
      authDomain: "manager-12b71.firebaseapp.com",
      databaseURL: "https://manager-12b71.firebaseio.com",
      projectId: "manager-12b71",
      storageBucket: "manager-12b71.appspot.com",
      messagingSenderId: "827703697457"
   })
  }
  render() {
  const store = createStore(reducers,{},applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <View>
          
          <Router/>
        </View>
      </Provider>
      /*
     <Provider store={createStore(reducers)}>
     <View style={{flex:1}}>
        <Header title="Teck Slack"></Header>
        <LibraryList/>
     </View>
     </Provider>
     */
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
