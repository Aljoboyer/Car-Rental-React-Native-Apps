import React from 'react';
import {StyleSheet, TextInput } from 'react-native';
import { colors } from '../../theme/colors';

const Input = ({placeholder, secureTextEntry, onChangeText, customStyles}) => {
  return (
    <TextInput style={[styles.inputs, customStyles]} onChangeText={onChangeText} placeholder={placeholder}  secureTextEntry={secureTextEntry} />
  );
}

export default Input;

const styles = StyleSheet.create({
    inputs:{
        height: 58,
        width: '100%',
        fontSize: 16,
        padding: 10
    }
  });