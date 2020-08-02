import axios from 'axios';
import { API_URL } from './config';

export const getPokemon = async (pokemon) => {
  const response = await axios.get(`${API_URL}${pokemon}`);
  console.log(response.data);
};
