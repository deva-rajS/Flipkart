import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {scale, verticalScale} from 'react-native-size-matters';
import {faCircleChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import AppText from '../text/AppText';
import AppTextLight from '../text/AppTextLight';

library.add(faCircleChevronRight);

interface RecommentItemsData {
  id: string;
  url: string;
  prize: string;
  title: string;
  subTitle: string;
}
interface ItemProps {
  item: RecommentItemsData;
}

const RecommendedItems: React.FC = () => {
  const {width} = Dimensions.get('window');
  const RecentData: RecommentItemsData[] = [
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

  const Items: React.FC<ItemProps> = ({item}) => {
    const {url, title, prize, subTitle} = item;
    return (
      <View style={styles.itemContainer}>
        <Image
          source={{uri: url}}
          style={[
            styles.img,
            {width: scale(width / 3 - 42.5), height: verticalScale(150)},
          ]}
        />
        <AppTextLight style={styles.itemTxt}>{title}</AppTextLight>
        <AppText style={styles.itemPrize}>{prize}</AppText>
        <AppText style={styles.subTitleText}>{subTitle}</AppText>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <AppText style={styles.titleText}>Recommended Items</AppText>
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
        style={styles.flatlistContainer}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  titleContainer: {
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flatlistContainer: {
    // marginHorizontal: 5,
    alignSelf: 'center',
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
    resizeMode: 'contain',
    marginHorizontal: 5,
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
export default RecommendedItems;
