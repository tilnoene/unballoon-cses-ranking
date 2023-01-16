import axios from 'axios';
import cheerio from 'cheerio';

import config from '../config.json';

const getUserInfoCSES = (userId: string): Promise<User> => {
  const promise = axios.get(`https://crossorigin.me/https://${config.api_cses}/user/${userId}`);

  const userInfo = promise
    .then(response => cheerio.load(response.data))
    .then($ => {
      var handle = $('.title-block').text().slice(1);
      handle = handle.slice(handle.indexOf('User') + 5, handle.indexOf('\n'));

      const numberOfQuestions = $(`a[href*=${userId}]`).text();

      return {
        id: userId,
        username: handle,
        numberOfQuestions: Number(numberOfQuestions),
      };
    });

  return userInfo;
};

export default getUserInfoCSES;
