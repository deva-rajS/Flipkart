import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';

import {faCircleChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

library.add(faCircleChevronRight);

export default function RecommendedItems() {
  const RecentData = [
    {
      id: '1',
      url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/cases-covers/back-cover/m/c/7/time-vv-v29-5g-bommscvr-2-asvalbuy-original-imagtrdhymhedsxd.jpeg?q=70',
      title: 'Mobiles',
      prize: '₹215',
      subTitle: 'Hot Deal',
    },
    {
      id: '2',
      url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/cases-covers/u/f/8/-original-imagsy6a8fhk7qzs.jpeg?q=70',
      title: 'True Wireless',
      prize: '₹572',
      subTitle: 'Hot Deal',
    },
    {
      id: '3',
      url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/cases-covers/back-cover/j/u/4/iq-neo-6-5g-tpu-cvr-pnk-sprig-original-imaghgh2xyqykgph.jpeg?q=70',
      title: 'Laptops',
      prize: '₹312',
      subTitle: 'Hot Deal',
    },
    {
      id: '4',
      url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/cases-covers/k/t/1/-original-imagsy6h3vjfwdeu.jpeg?q=70',
      title: 'Smart Watches',
      prize: '₹366',
      subTitle: 'Hot Deal',
    },
    {
      id: '5',
      url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/cases-covers/back-cover/k/v/r/iq-neo-6-5g-slc-cvr-prpl-sprig-original-imaghgh3fqwbab8n.jpeg?q=70',
      title: 'Keyboards',
      prize: '₹532',
      subTitle: 'Hot Deal',
    },
  ];

  const Items = ({item}) => {
    const {url, title, prize, subTitle} = item;
    return (
      <View style={styles.itemContainer}>
        <Image source={{uri: url}} style={styles.img} />
        <Text style={styles.itemTxt}>{title}</Text>
        <Text style={styles.itemPrize}>{prize}</Text>
        <Text style={styles.subTitleText}>{subTitle}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Recommended Items</Text>
        <FontAwesomeIcon
          icon={faCircleChevronRight}
          size={24}
          color="#2E82E8"
        />
      </View>
      <FlatList
        numColumns={3}
        data={RecentData}
        renderItem={({item}) => <Items item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemContainer: {
    margin: 5,
    backgroundColor: 'white',
    borderBlockColor: 'gray',
    borderWidth: 0.1,
    alignItems: 'center',
    borderRadius: 10,
  },
  img: {
    width: 100,
    height: 150,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  itemTxt: {
    color: 'black',
    alignSelf: 'flex-start',
    marginLeft: 5,
  },
  itemPrize: {
    color: 'black',
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginLeft: 5,
  },
  titleText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 20,
    marginBottom: 10,
  },
  subTitleText: {
    color: '#18C767',
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginBottom: 10,
  },
});
