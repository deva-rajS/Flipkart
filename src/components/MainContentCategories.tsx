import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';

export default function MainContentCategories() {
  // const [itemsTitle, setItemsTitle] = useState('Grocery');
  const MainCategoriesData = [
    {
      id: '1',
      url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/flour/j/n/v/-original-imagm7w8jfn29hp2.jpeg?q=70',
      title: 'Atta & Flours',
    },
    {
      id: '2',
      url: 'https://rukminim2.flixcart.com/image/832/832/knrsjgw0/rice/e/i/n/white-mogra-na-basmati-rice-bag-india-gate-original-imag2dgnr8mqushh.jpeg?q=70',
      title: 'Rice ',
    },
    {
      id: '3',
      url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/spice-masala/z/j/a/-original-imagu7yb6ff9jeh5.jpeg?q=70',
      title: 'Masalas',
    },
    {
      id: '4',
      url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/pulses/j/c/u/-original-imagpgzhvykkrq9g.jpeg?q=70',
      title: 'Dals & Pulses',
    },
    {
      id: '5',
      url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/ghee/v/m/u/-original-imagrmerex5dtfxk.jpeg?q=70',
      title: 'Ghee & Oils',
    },
    {
      id: '6',
      url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/nut-dry-fruit/v/w/l/-original-imagreprhahkmqrh.jpeg?q=70',
      title: 'Dry Fruits',
    },
  ];
  const Items = ({item}) => {
    const {url, title} = item;
    return (
      <View>
        <View style={styles.imgContainer}>
          <Image source={{uri: url}} style={styles.img} />
        </View>
        <Text style={styles.itemTxt}>{title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{`Grocery >`}</Text>
        <Image
          source={{
            uri: 'https://rukminim2.flixcart.com/image/832/832/kflftzk0hlty2aw-0/edible-oil/j/a/d/sunlite-refined-pouch-sunflower-oil-fortune-original-imafw33uhwkebr5j.jpeg?q=70',
          }}
          style={[styles.img, {marginRight: 20}]}
        />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Staples</Text>
        <FlatList
          numColumns={3}
          data={MainCategoriesData}
          renderItem={({item}) => <Items item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'white',
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
    alignItems: 'center',
    paddingVertical: 10,
  },
  imgContainer: {
    width: 80,
    height: 85,
    margin: 5,
    backgroundColor: 'lightgray',
    borderRadius: 40,
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
    color: '#1582E8',
    fontWeight: '500',
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 20,
  },
  listContainer: {
    marginHorizontal: 10,
  },
  listTitle: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
    marginVertical: 20,
    marginHorizontal: 10,
  },
});
