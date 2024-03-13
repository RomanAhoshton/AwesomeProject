import {useState, useEffect} from 'react';
import {Hero} from 'types/index';
import axios from 'axios';
import uuid from 'react-native-uuid';
import {Alert} from 'react-native';

export const useGetHeroes = () => {
  const url = 'https://swapi.py4e.com/api/people/';
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalRequests, setTotalRequests] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    getHero();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const getHero = async () => {
    try {
      const response = await axios.get(`${url}?page=${page}`);
      if (response.data) {
        const addIdToHero = response.data.results.map(
          (item: Hero) => (item = {...item, id: uuid.v4().toString()}),
        );
        setHeroes(prevHeroes => [...prevHeroes, ...addIdToHero]);

        setTotalRequests(prev => prev + 1);
      }
    } catch (error) {
      Alert.alert('Error', error as string);
    } finally {
      setLoading(false);
    }
  };
  const loadMore = () => {
    if (totalRequests < 7) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return {heroes, loading, loadMore};
};
