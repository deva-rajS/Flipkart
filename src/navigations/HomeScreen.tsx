import {View, StyleSheet, FlatList} from 'react-native';
import AdSlider from '../components/AdSlider';
import EventSection from '../components/EventSection';
import RecentyViewedStore from '../components/RecentlyViewedStore';
import RecommendedItems from '../components/RecommendedItems';
import BestOfElectronics from '../components/BestOfElectronics';
interface HomeScreenProps {
  route: any;
  navigation: any;
}
interface SectionItem {
  id: string;
  render: () => React.ReactElement;
}
const HomeScreen: React.FC<HomeScreenProps> = ({route, navigation}) => {
  const data: SectionItem[] = [
    {id: '1', render: () => <AdSlider />},
    {id: '2', render: () => <EventSection />},
    {id: '3', render: () => <RecentyViewedStore />},
    {id: '4', render: () => <RecommendedItems />},
    {id: '5', render: () => <BestOfElectronics />},
  ];
  const renderItem = ({item}: {item: SectionItem}) => {
    return <View>{item.render()}</View>;
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default HomeScreen;
