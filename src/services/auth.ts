import { pubClient } from './client';

// Client for authentication service
export default class AuthServices {
  login(email: string, password: string): Promise<any> {
    // create path url
    const path = '/login';
    // create get request
    return new Promise((resolve, reject) => {
      // create a client for private routes
      const client = pubClient();
      // request Data
      const reqData = {
        email,
        password,
      };
      client.post(path, { ...reqData }).then((resp) => {
        const { data } = resp;
        resolve({ data });
      }).catch((e) => {
        reject(e)
      });
    });
  }
}
