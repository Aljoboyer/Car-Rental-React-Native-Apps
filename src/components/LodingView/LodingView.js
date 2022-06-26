import React from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';

const LodingView = () => {
  return (
    <SafeAreaView style={styles.LodingContainer}>
        <ActivityIndicator color="blue" size="large" />
    </SafeAreaView>
  );
}

export default LodingView;
const styles = StyleSheet.create({
    LodingContainer:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
  