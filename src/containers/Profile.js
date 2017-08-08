import React, { Component } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import Input from '../components/Input'

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

 class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', note: '' };
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
  <View style={styles.container}>
       <Input name={'Title'} secureTextEntry={false} value={this.state.title} onChangeText={(title) => this.setState({title})} />
    <Input name={'Notes'} secureTextEntry={false} value={this.state.note} onChangeText={(note) => this.setState({note})} />
<Button
       
        onPress={() => this.props.navigation.dispatch({ type: 'ADD_DATA',/* here call asyc req and add new array using axios  */ payload: {'key':Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5), 'title':this.state.title, 'note':this.state.note } })}
        title="Publish"
      />

  </View>
 );
  }
}




export default ProfileScreen;
