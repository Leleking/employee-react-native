import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Text} from 'react-native'
import { emailChanged,passwordChanged,loginUser} from '../actions'
import {Card,CardSection,Input,Button,Spinner} from './common'
class LoginForm extends Component {
    state = {
        test:""
    }
    onEmailChange = (value) => {
        this.props.emailChanged(value)
        
        
    }
    onPasswordChange = (value) => {
        this.props.passwordChanged(value)
        
    }
    renderButton = () =>{
        var  spinner = <Spinner size="large"/>
        var button = <Button onPress={()=>{
            const {email,password} = this.props
            this.props.loginUser({email,password})
        }}>
            Login
        </Button>
        activeState = this.props.loading ? spinner : button
        return activeState
    }
    render() {
    return (
     <Card>
         <CardSection>
             <Input
             label="Email"
             value ={this.props.email}
             placeholder="email@gmail.com"
             onChangeText={email => {this.onEmailChange(email)}}
             />
         </CardSection>
         <CardSection>
             <Input
             secureTextEntry
             label="Password"
             placeholder="password"
             value={this.props.password}
             onChangeText={password => {this.onPasswordChange(password)}}
             />
         </CardSection>
         <Text style={styles.errorTextStyle}>
             {this.props.error}
         </Text>
         <CardSection>
             
             {this.renderButton()}
         </CardSection>
     </Card>
    );
  }
}/*
const mapStateToProps = state => { 
    return {
        email: state.auth.email,
        password:state.auth.password,
        error:state.auth.error
    }
}*/
const styles = {
    errorTextStyle:{
        fontSize: 20,
        alignSelf: 'center',
        color:'red'
    }
}
const mapStateToProps = ({auth}) => {
    const {email,password,error,loading} = auth
    return {
        email,password,error,loading
    }
}
export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LoginForm)