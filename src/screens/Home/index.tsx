import React from 'react';
import {SafeAreaView, StyleSheet, FlatList, View} from 'react-native';
import Metrics from '../../utils';
import Heroes from '../../components/Heroes';
import FansPannel from '../../components/FansPannel';
import {useGetHeroes} from '../../hooks/useGetHeroes';

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
    paddingBottom: 20,
  },
});

export default () => {
  const {heroes} = useGetHeroes();

  return (
    <SafeAreaView style={styles.wrapper}>
      <FansPannel />
      <View style={styles.container}>
        <FlatList
          data={heroes}
          renderItem={({item}) => <Heroes item={item} />}
          keyExtractor={item => item.name.toString()}
        />
      </View>
    </SafeAreaView>
  );
};
