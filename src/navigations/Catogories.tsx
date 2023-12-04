import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import SideBarCategories from '../components/SideBarCategories';
import MainContentCategories from '../components/MainContentCategories';

export default function Catogories({route, navigation}) {
  return (
    <View style={styles.container}>
      <SideBarCategories />
      <MainContentCategories />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'row'},
});
