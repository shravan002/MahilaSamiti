import axios from 'axios';
const apiHost = 'https://local-banking-system.herokuapp.com';

export default {
  async fetchMembers() {
    try {
      const resp = await axios.get(apiHost + '/member');
      return resp;
    } catch (error) {
      console.error(error);
    }
  },
};
