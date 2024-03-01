import React from 'react';
import {StyleSheet, Text, View, Button, Pressable} from 'react-native';
import {Hero} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types';
import {useFavorite} from '../../hooks/useFavorite';

type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const styles = StyleSheet.create({
  hero: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    borderColor: 'grey',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
  favoriteText: {
    textAlign: 'center',
    marginTop: 10,
    color: 'red',
    fontSize: 16,
  },

  button: {
    color: 'red',
  },
});

interface Props {
  item: Hero;
}

export default ({item}: Props) => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const {addHeroToFavorite, removeHeroFromFavorite, isFavorite} = useFavorite();

  return (
    <Pressable onPress={() => navigation.navigate('Detail', {item})}>
      {isFavorite.includes(item) && (
        <Text style={styles.favoriteText}>in Favorite</Text>
      )}
      <View style={styles.hero}>
        {isFavorite.includes(item) ? (
          <Button
            color="red"
            title={'Remove'}
            onPress={() => removeHeroFromFavorite(item)}
          />
        ) : (
          <Button
            color="red"
            title={'Add'}
            onPress={() => addHeroToFavorite(item)}
          />
        )}

        <Text>{item?.name}</Text>
        <Text>{item?.birth_year}</Text>
        <Text>{item?.gender}</Text>
      </View>
    </Pressable>
  );
};
