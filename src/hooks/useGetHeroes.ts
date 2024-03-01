import {useState, useEffect} from 'react';
import {Hero} from '../types';
import axios from 'axios';
import {url} from '../helpers';

export const useGetHeroes = () => {
  const [heroes, setHeroes] = useState<null | Hero[]>(null);

  useEffect(() => {
    getHero();
  }, []);

  const getHero = async () => {
    const response = await axios.get(url);
    if (response.data) {
      setHeroes(response.data.results);
    }
  };

  return {heroes};
};
