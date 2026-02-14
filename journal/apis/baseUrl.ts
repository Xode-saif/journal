import axios from 'axios';

const uris = {
    production:'http://localhost:8000'
}
export const axiosBaseUrl = {
  url: axios.create({
    baseURL: uris.production,
  }),
};

export const baseUrl = uris.production;