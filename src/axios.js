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

  async fetchCommittee() {
    try {
      const resp = await axios.get(apiHost + '/committee/9');
      return resp;
    } catch (error) {
      console.error(error);
    }
  },
};
