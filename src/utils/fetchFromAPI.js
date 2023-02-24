import axios from 'axios';

export const BASIC_LINK = 'https://youtube-v31.p.rapidapi.com';



const options = {
  params: {
    maxResults: 70,
  },
  headers: {
    'X-RapidAPI-Key': '8c8d648c9emsh87341681f1dcf04p1633a4jsne18229bc72d1',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASIC_LINK}/${url}`, options);

  return data;
};
