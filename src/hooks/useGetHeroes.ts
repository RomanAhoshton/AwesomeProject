import {useState, useEffect} from 'react';
import {Hero} from '../types';
import axios from 'axios';

export const useGetHeroes = () => {
  const url = 'https://swapi.dev/api/people/';
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
