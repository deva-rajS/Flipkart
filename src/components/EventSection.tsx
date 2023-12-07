import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import React from 'react';
import {library, IconProp} from '@fortawesome/fontawesome-svg-core';

import {
  faCoins,
  faCirclePlus,
  faMoneyCheckDollar,
  faMobileAndroid,
  faArrowRotateLeft,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import AppText from '../text/AppText';

library.add(
  faCoins,
  faCirclePlus,
  faMoneyCheckDollar,
  faMobileAndroid,
  faArrowRotateLeft,
);
interface EventSectionItem {
  id: string;
  name: string;
  icon: IconProp;
  color: string;
}
interface ItemProps {
  item: EventSectionItem;
}
const EventSection: React.FC = () => {
  const {width} = Dimensions.get('window');
  const EventData: EventSectionItem[] = [
    {
      id: '1',
      name: 'SuperCoin',
      icon: faCoins,
      color: '#ff9933',
    },
    {id: '2', name: 'Plus', icon: faCirclePlus, color: 'gold'},
    {
      id: '3',
      name: 'Personal Loan',
      icon: faMoneyCheckDollar,
      color: '#29B4FF',
    },
    {
      id: '4',
      name: 'Prepaid Recharge',
      icon: faMobileAndroid,
      color: '#29B4FF',
    },
    {id: '5', name: 'Spoyl', icon: faArrowRotateLeft, color: '#66cc00'},
  ];
  const Items: React.FC<ItemProps> = ({item}) => {
    const {name, icon, color} = item;
    const words = name.split(' ');
    return (
      <View style={styles.itemContainer}>
        <FontAwesomeIcon
          icon={icon}
          color={color}
          size={34}
          style={styles.icon}
        />
        {words.map((word, index) => (
          <AppText key={index} style={styles.txt}>
            {word}
          </AppText>
        ))}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        contentContainerStyle={[
          styles.flatlistContainer,
          ,
          {width: width - 30},
        ]}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        data={EventData}
        renderItem={({item}) => <Items item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 20,
  },
  txt: {
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 15,
  },
  itemContainer: {
    alignItems: 'center',
  },
  flatlistContainer: {
    justifyContent: 'space-between',
  },
  icon: {
    marginBottom: 5,
  },
});
export default EventSection;
