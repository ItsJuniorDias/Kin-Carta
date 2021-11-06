import axios from 'axios';

const api = axios.create({
  baseURL: "https://s3.amazonaws.com/technical-challenge/v3/contacts.json"
})

export default api;
