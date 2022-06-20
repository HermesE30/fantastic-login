import axios from 'axios';
const host = 'https://hrms-auth.herokuapp.com';

const pubClient = () => axios.create({
  baseURL: `${host}/users`,
});

export {
  pubClient,
};
