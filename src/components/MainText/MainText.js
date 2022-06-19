import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { presets } from './TextPreset';

const MainText = ({children, preset='default', style}) => {
    const TextStyle = StyleSheet.compose(presets[preset], style)
  return (
      <Text style={TextStyle}>{children}</Text>
  );
}

export default MainText;
