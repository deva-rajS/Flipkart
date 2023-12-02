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
import RecentyViewedStore from '../components/RecentyViewedStore';
import RecommendedItems from '../components/RecommendedItems';
import BestOfElectronics from '../components/BestOfElectronics';

export default function HomeScreen({route, navigation}) {
  return (
    <ScrollView style={styles.container}>
      <AdSlider />
      <EventSection />
      <RecentyViewedStore />
      <RecommendedItems />
      <BestOfElectronics />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
