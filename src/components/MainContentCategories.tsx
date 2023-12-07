import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import AppText from '../text/AppText';
import ImagesData from '../Images/ImagesData';
import {scale, verticalScale} from 'react-native-size-matters';
interface MainContentCategoriesProps {
  itemId: number;
}
interface MainCategoriesDataItem {
  id: string;
  url: string;
  title: string;
}
interface ItemProps {
  item: MainCategoriesDataItem;
}

const MainContentCategories: React.FC<MainContentCategoriesProps> = ({
  itemId,
}) => {
  const {width} = Dimensions.get('window');
  const MainCategoriesData: {
    id: number;
    title: string;
    subTitle: string;
    headerImage: string;
    data: MainCategoriesDataItem[];
  }[] = ImagesData;

  const Items: React.FC<ItemProps> = ({item}) => {
    const {url, title} = item;
    return (
      <View style={styles.itemContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={{uri: url}}
            style={[
              styles.img,
              {width: scale(width / 3 - 90), height: verticalScale(50)},
            ]}
          />
        </View>
        <AppText
          style={[
            styles.itemTxt,
            {width: scale(width / 3 - 60), height: verticalScale(50)},
          ]}>
          {title}
        </AppText>
      </View>
    );
  };
  const filteredData = MainCategoriesData.find(
    category => category.id === itemId,
  );
  return (
    <View style={styles.container}>
      {filteredData ? (
        <>
          <View style={styles.titleContainer}>
            <AppText
              style={styles.titleText}>{`${filteredData?.title} >`}</AppText>
            <Image
              source={{
                uri: filteredData?.headerImage,
              }}
              style={[
                styles.img,
                {
                  marginRight: 20,
                  width: scale(width / 3 - 60),
                  height: verticalScale(50),
                },
              ]}
            />
          </View>
          <View style={styles.listContainer}>
            <AppText style={styles.listTitle}>{filteredData?.subTitle}</AppText>
            <FlatList
              numColumns={3}
              data={filteredData?.data}
              renderItem={({item}) => <Items item={item} />}
              keyExtractor={item => item.id}
            />
          </View>
        </>
      ) : (
        <></>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'white',
  },
  itemContainer: {
    // marginHorizontal: 10,
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
    // width: 50,
    // height: 75,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  itemTxt: {
    color: 'black',
    fontSize: 13,
    paddingBottom: 5,
    flexWrap: 'wrap',
    textAlign: 'center',
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

export default MainContentCategories;
