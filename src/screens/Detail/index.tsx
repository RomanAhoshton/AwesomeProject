import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types'; // Adjust the path as per your project structure
import {SafeAreaView} from 'react-native-safe-area-context';
import Metrics from '../../utils';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

interface Props {
  route: DetailScreenRouteProp;
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    width: Metrics.width - 30,

    backgroundColor: 'white',
  },

  wrapper: {
    backgroundColor: 'white',
    flex: 1,
  },
  detailItem: {
    alignSelf: 'center',
    flexDirection: 'column',
    marginTop: 80,
    borderWidth: 1,
    padding: 50,
    borderColor: 'grey',
    borderRadius: 5,
  },
  textItem: {
    marginBottom: 15,
    fontSize: 20,
    color: 'red',
  },
});

const DetailScreen = ({route}: Props) => {
  const {item} = route.params;
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.detailItem}>
          <Text style={styles.textItem}>{`Name: ${item.name}`}</Text>
          <Text style={styles.textItem}>{`Year: ${item.birth_year}`}</Text>
          <Text style={styles.textItem}>{`Gender: ${item.gender}`}</Text>
          <Text style={styles.textItem}>{`Hair: ${item.hair_color}`}</Text>
          <Text style={styles.textItem}>{`Eye: ${item.eye_color}`}</Text>
          <Text style={styles.textItem}>{`Skin: ${item.skin_color}`}</Text>
          <Text style={styles.textItem}>{`Height: ${item.height}`}</Text>
          <Text style={styles.textItem}>{`Weight: ${item.mass}`}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
