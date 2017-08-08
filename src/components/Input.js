import React from 'react';
import PropTypes from 'prop-types';

import { Text, TextInput, StyleSheet, View } from 'react-native';
const styles = StyleSheet.create({
  container: {
padding:10,
  },
  text: {
fontSize:16,
fontWeight:'bold',

  },
  input: {
    height: 40, 
    
  }
});
const Input = (props) => (
  <View style={styles.container} >
  <Text style={styles.text} >{props.name}</Text>
<TextInput style={styles.input} value={props.value} secureTextEntry={props.secureTextEntry} onChangeText={props.onChangeText} placeholder={props.name}  />
  </View>
);


export default Input
