import axios from 'axios';
const host = 'http://localhost:3001';

const pubClient = () => axios.create({
  baseURL: 'http://localhost:3001/users',
});

export {
  pubClient,
};
