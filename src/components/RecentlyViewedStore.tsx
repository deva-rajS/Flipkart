import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import AppText from '../text/AppText';
import {scale, verticalScale} from 'react-native-size-matters';
interface RecentlyViewedStoreItem {
  id: string;
  url: string;
  title: string;
}
interface ItemProps {
  item: RecentlyViewedStoreItem;
}
const RecentlyViewedStore: React.FC = () => {
  const {width} = Dimensions.get('window');
  const RecentData: RecentlyViewedStoreItem[] = [
    {
      id: '1',
      url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/2/m/o/edge-40-pay40030in-motorola-original-imagpqzchzhg6fex.jpeg?q=70',
      title: 'Mobiles',
    },
    {
      id: '2',
      url: 'https://rukminim2.flixcart.com/image/832/832/l2jcccw0/headphone/y/w/p/-original-imagduyfccc4rqhd.jpeg?q=70',
      title: 'True Wireless',
    },
    {
      id: '3',
      url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/computer/v/y/z/-original-imagtucnqsqpbvk6.jpeg?q=70',
      title: 'Laptops',
    },
    {
      id: '4',
      url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/a/g/b/49-t900-ultra-big-smartwatch-with-2-09-49mm-infinite-display-original-imaguh5s6um2hdph.jpeg?q=70',
      title: 'Smart Watches',
    },
    {
      id: '5',
      url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/computer-acc-combo/y/n/m/f2023-combo-premium-rgb-backlit-gaming-keyboard-mouse-with-6-original-imagr6v59ybqhyvx.jpeg?q=70',
      title: 'Keyboards',
    },
  ];

  const Items: React.FC<ItemProps> = ({item}) => {
    const {url, title} = item;
    return (
      <View style={styles.itemContainer}>
        <Image
          source={{uri: url}}
          style={[
            styles.img,
            {width: scale(width / 3 - 50), height: verticalScale(130)},
          ]}
        />
        <AppText style={styles.itexText}>{title}</AppText>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <AppText style={styles.titleText}>Recently Viewed Stores</AppText>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={RecentData}
        renderItem={({item}) => <Items item={item} />}
        keyExtractor={item => item.id}
        style={styles.flatlistContainer}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  flatlistContainer: {
    marginHorizontal: 10,
  },
  itemContainer: {
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderBlockColor: 'gray',
    borderWidth: 0.1,
    alignItems: 'center',
    borderRadius: 10,
  },
  img: {
    // width: 100,
    // height: 150,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  itexText: {
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  titleText: {
    marginHorizontal: 15,
    color: 'black',
    fontWeight: '500',
    fontSize: 20,
    marginBottom: 10,
    // fontFamily: 'Poppins-Italic',
  },
});
export default RecentlyViewedStore;
