import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 0.5,
    width: '30%',
    padding: 7,
    borderRadius: 5,
  },
  count: {
    fontSize: 30,
  },
  title: {
    fontSize: 20,
  },
});

interface Props {
  title: string;
  count: number;
}

export default ({title, count}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
