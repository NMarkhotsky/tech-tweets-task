import axios from 'axios';

axios.defaults.baseURL = 'https://6453ab91c18adbbdfea42414.mockapi.io';

export const getTweets = async () => {
  try {
    const data = await axios.get('/users');
    return data;
  } catch (e) {
    console.log(e);
  }
};
