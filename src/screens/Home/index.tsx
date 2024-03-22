import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Metrics from '../../utils/index';
import Heroes from '../../components/Heroes';
import FansPannel from '../../components/FansPannel';
import {useGetHeroes} from '../../hooks/useGetHeroes';

export default () => {
  const {heroes, loading, loadMore} = useGetHeroes();
  console.log(heroes, 'heroes');

  return (
    <SafeAreaView style={styles.wrapper}>
      <FansPannel />

      <FlatList
        style={styles.flatList}
        data={heroes}
        renderItem={({item}) => <Heroes item={item} />}
        keyExtractor={item => item.id.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
      />

      {loading && (
        <ActivityIndicator size="large" color="red" style={styles.loader} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flatList: {
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

  loader: {
    paddingBottom: 10,
  },
});
