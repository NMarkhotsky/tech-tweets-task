import axios from 'axios';

axios.defaults.baseURL = 'https://6453ab91c18adbbdfea42414.mockapi.io';

export const getTweets = async (page, abortController) => {
  const data = await axios.get(`/users?p=${page}&l=${3}`, {
    signal: abortController.signal,
  });
  return data;
};

// export const getTweets = async () => {
//   const data = await axios.get(`/users`);
//   return data;
// };

export const updateTweets = async (id, followers, following) => {
  const data = await axios.put(`/users/${id}`, {
    followers,
    following,
  });

  return data;
};
