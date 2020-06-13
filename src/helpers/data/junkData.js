import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getJunkByUid = (uid) => new Promise((resolve, reject) => {
  console.error('does this even run?');
  console.error('your baseUrl is ', baseUrl);
  // axios.get(`${baseUrl}/listOfItems.json?orderBy="uid"&equalTo="${uid}"`)
  axios.get(`${baseUrl}/listOfItems.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const fbJunk = response.data;
      console.error('your response is...', fbJunk);
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

export default { getJunkByUid };
