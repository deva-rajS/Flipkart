import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import SideBarCategories from '../components/SideBarCategories';
import MainContentCategories from '../components/MainContentCategories';

interface CategoriesProps {
  route: any;
  navigation: any;
}
const Catogories: React.FC<CategoriesProps> = ({route, navigation}) => {
  const [itemId, setItemId] = useState(1);
  return (
    <View style={styles.container}>
      <SideBarCategories itemId={itemId} setItemId={setItemId} />
      <MainContentCategories itemId={itemId} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'row'},
});

export default Catogories;
