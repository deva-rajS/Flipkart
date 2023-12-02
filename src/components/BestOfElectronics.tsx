import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';

import {faCircleChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

library.add(faCircleChevronRight);

export default function BestOfElectronics() {
  const RecentData = [
    {
      id: '1',
      url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/p/r/z/enco-buds-2-oppo-original-imagh9frfp7gxdb3.jpeg?q=70',
      title: 'Mobiles',
      prize: 'From ₹799',
    },
    {
      id: '2',
      url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/computer/8/e/m/-original-imagqf3a3j6ebxzc.jpeg?q=70',
      title: 'True Wireless',
      prize: 'From ₹46,990',
    },
    {
      id: '3',
      url: 'https://rukminim2.flixcart.com/image/832/832/kp1imq80/mouse/7/n/t/g502-hero-logitech-original-imag3d4qhpdjr9tj.jpeg?q=70',
      title: 'Laptops',
      prize: 'From ₹1,109',
    },
    {
      id: '4',
      url: 'https://rukminim2.flixcart.com/image/832/832/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70',
      title: 'Smart Watches',
      prize: 'Shop Now!',
    },
  ];

  const Items = ({item}) => {
    const {url, title, prize, subTitle} = item;
    return (
      <View style={styles.itemContainer}>
        <Image source={{uri: url}} style={styles.img} />
        <Text style={styles.itemTxt}>{title}</Text>
        <Text style={styles.itemPrize}>{prize}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Best of Electronics</Text>
        <FontAwesomeIcon icon={faCircleChevronRight} size={24} color="white" />
      </View>
      <View style={styles.flatlistContainer}>
        <FlatList
          numColumns={2}
          data={RecentData}
          renderItem={({item}) => <Items item={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1582E8',
    paddingTop: 10,
    paddingBottom: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
  itemContainer: {
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: 'white',
    borderBlockColor: 'gray',
    borderWidth: 0.1,
    alignItems: 'center',
    borderRadius: 10,
  },
  img: {
    width: 160,
    height: 200,
    resizeMode: 'contain',
    marginHorizontal: 10,
    marginTop: 5,
  },
  itemTxt: {
    color: 'black',
    alignSelf: 'flex-start',
    marginLeft: 5,
  },
  itemPrize: {
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginLeft: 5,
    color: '#18C767',
    marginBottom: 10,
  },
  titleText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    marginBottom: 10,
  },
  flatlistContainer: {
    marginHorizontal: 15,
  },
});
