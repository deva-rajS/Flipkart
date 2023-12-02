import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

export default function AdSlider() {
  const {width} = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <Image
        source={require('../Images/slide4.jpg')}
        style={[styles.img, {width: width, height: 235}]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  img: {
    resizeMode: 'contain',
  },
});
