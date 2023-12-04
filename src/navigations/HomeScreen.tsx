import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AdSlider from '../components/AdSlider';
import EventSection from '../components/EventSection';
import RecentyViewedStore from '../components/RecentlyViewedStore';
import RecommendedItems from '../components/RecommendedItems';
import BestOfElectronics from '../components/BestOfElectronics';
interface HomeScreenProps {
  route: any;
  navigation: any;
}
const HomeScreen: React.FC<HomeScreenProps> = ({route, navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <AdSlider />
      <EventSection />
      <RecentyViewedStore />
      <RecommendedItems />
      <BestOfElectronics />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default HomeScreen;
