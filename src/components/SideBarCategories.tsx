import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import AppText from '../text/AppText';
interface SideBarCategoriesProps {
  itemId: number;
  setItemId: React.Dispatch<React.SetStateAction<number>>;
}
interface SideBarCategoriesItem {
  id: string;
  url: string;
  title: string;
}
interface ItemProps {
  item: SideBarCategoriesItem;
  onItemSelected: React.Dispatch<React.SetStateAction<number>>;
}

const SideBarCategories: React.FC<SideBarCategoriesProps> = ({
  itemId,
  setItemId,
}) => {
  const SideBarData: SideBarCategoriesItem[] = [
    {
      id: '1',
      url: 'https://rukminim1.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100',
      title: 'Grocery',
    },
    {
      id: '2',
      url: 'https://rukminim1.flixcart.com/fk-p-flap/96/96/image/0d75b34f7d8fbcb3.png?q=100',
      title: 'Fashion ',
    },
    {
      id: '3',
      url: 'https://rukminim1.flixcart.com/fk-p-flap/96/96/image/0139228b2f7eb413.jpg?q=100',
      title: 'Appliances',
    },
    {
      id: '4',
      url: 'https://rukminim1.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100',
      title: 'Mobiles',
    },
    {
      id: '5',
      url: 'https://rukminim1.flixcart.com/flap/96/96/image/69c6589653afdb9a.png?q=100',
      title: 'Electronics',
    },
    {
      id: '6',
      url: 'https://rukminim1.flixcart.com/flap/96/96/image/71050627a56b4693.png?q=100',
      title: 'Tavel',
    },
    {
      id: '7',
      url: 'https://rukminim1.flixcart.com/flap/96/96/image/dff3f7adcf3a90c6.png?q=100',
      title: 'Toys & More',
    },
    {
      id: '8',
      url: 'https://rukminim1.flixcart.com/flap/96/96/image/ab7e2b022a4587dd.jpg?q=100',
      title: 'Home & Furniture',
    },
  ];
  const Items: React.FC<ItemProps> = ({item, onItemSelected}) => {
    const {url, title} = item;
    const setItem = () => onItemSelected(Number(item.id));

    return (
      <TouchableHighlight onPress={setItem}>
        <View style={styles.itemContainer}>
          <Image source={{uri: url}} style={styles.img} />
          <AppText style={styles.itemTxt}>{title}</AppText>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={SideBarData}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Items item={item} onItemSelected={setItemId} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 50,
    height: 75,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  itemTxt: {
    color: 'gray',
    alignSelf: 'center',
    paddingBottom: 5,
  },
  titleText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 20,
    marginBottom: 10,
  },
});
export default SideBarCategories;
