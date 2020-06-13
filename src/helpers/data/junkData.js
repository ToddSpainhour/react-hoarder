import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getJunkByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/listOfItems.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const fbJunk = response.data;
      const allJunk = [];
      if (fbJunk) {
        Object.keys(fbJunk).forEach((fbId) => {
          fbJunk[fbId].id = fbId;
          allJunk.push(fbJunk[fbId]);
        });
      }
      resolve(allJunk);
    })
    .catch((err) => reject(err));
});

const getSingleJunk = (junkId) => axios.get(`${baseUrl}/listOfItems/${junkId}.json`);

const postJunk = (newJunk) => axios.post(`${baseUrl}/listOfItems/.json`, newJunk);

export default { getJunkByUid, getSingleJunk, postJunk };
