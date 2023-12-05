import {View, Text, StyleSheet, FlatList} from 'react-native';
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
    return (
      <View style={{marginRight: 10}}>
        <View style={styles.itemContainer}>
          <FontAwesomeIcon icon={icon} color={color} size={34} />
          <Text style={styles.txt}>{name}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
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
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },
  itemContainer: {
    // columnGap: 10,
    width: 70,
    alignItems: 'center',
  },
});
export default EventSection;
