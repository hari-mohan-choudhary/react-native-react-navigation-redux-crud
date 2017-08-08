import React, { Component } from 'react';
import { TextInput, View, Text, Button } from 'react-native';
import URL from '../action/url'
import axios from 'axios'
import Input from '../components/Input'
 class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', password: '' };
    this.login = this.login.bind(this)
  }

  static navigationOptions = {
    title: 'Log In    ',
  };

login(){

 axios.post(URL+'/login', this.state)
    .then(responce => this.props.navigation.dispatch({ type: 'Login' }),
    err => { alert(err) }
  )
}

  render() {
    return (
      <View>
<Text>{this.state.username}{this.state.pass}</Text>
    <Input name={'user name'} secureTextEntry={false} value={this.state.name} onChangeText={(name) => this.setState({name})} />
 <Input name={'Password'} secureTextEntry={true} value={this.state.password} onChangeText={(password) => this.setState({password})} />
 <Button
    title={'Log In'}
    onPress={this.login}
  />
      </View>
    );
  }
}

export default Login
