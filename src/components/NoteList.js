import React from 'react';
import PropTypes from 'prop-types';

import { Text, TextInput, Dimensions, StyleSheet, Image, View } from 'react-native';
const styles = StyleSheet.create({
  container: {
padding:10,
flex:1,
  },
heading: {

  },
notes: {
  },

});
const NoteList = (props) => {
let windowWidth = Dimensions.get('window').width;
return ( 
 <View style={styles.container} >
 <Text style={styles.heading} >{props.img.title}</Text>
 <Text style={styles.notes} >{props.img.note}</Text>
  </View> 
)
};


export default NoteList
