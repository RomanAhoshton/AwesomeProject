import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Count from '../Count';
import {useFavorite} from 'hooks/useFavorite';

export default () => {
  const {male, female, other, cleanAll} = useFavorite();

  return (
    <View style={styles.container}>
      <View style={styles.buttonTitle}>
        <Text style={styles.title}> Fans</Text>
        <TouchableOpacity style={styles.button} onPress={cleanAll}>
          <Text style={styles.text}>CLEAR FANS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.countContainer}>
        <Count title="Female Fans" count={female.length} />
        <Count title="Male Fans" count={male.length} />
        <Count title="Others" count={other.length} />
      </View>

      <View style={styles.description}>
        <Text style={styles.descriptionText}>Favorite</Text>
        <Text style={styles.descriptionText}>Name</Text>
        <Text style={styles.descriptionText}>Birth Year</Text>
        <Text style={styles.descriptionText}>Gender</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
  },
  buttonTitle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'red',
  },
  button: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 30,
    color: 'red',
  },
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 30,
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: '600',
  },
});
