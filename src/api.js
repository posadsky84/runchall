import axios from 'axios';
import { backURL } from './misc';

const instance = axios.create({
  baseURL: backURL,
  timeout: 15000,
});

export const API = {
  getList() {
    return instance.get(`/runchall`);
  },
};