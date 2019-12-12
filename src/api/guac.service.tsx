import { async } from "q";
import { Auth } from '../utils/Auth'
const axios = require('axios');
// import { }
// const { }

export const GuacService = () => {
  // login = (username, password) => {

  // }

  return {
    getMovies: async () => {

      let movies = [
        {
          "name": "Rick & Morty S4e02: The Old Man and the Seat"
        },
        {
          "name": "Rick & Morty S4e03: One Crew over the Crewcoo's Morty"
        }
      ]
      let promiseToMovies = new Promise((resolve, reject) => {
        //TODO: put in config file
        //
        // axios.get(`http://www.mocky.io/v2/5dede045330000590098425b`)
        //   .then((response: any) => {
        //     // console.log(response.data.token);
        //     console.log(response.data)
        //     resolve(response.data);
        //   })
        //   .catch((error: any) => {
        //     // handle error
        //     console.log(error); //telemetry
        //   }).finally(() => {
        //     // resolve('cool');
        //     resolve(m);
        //   })

        setTimeout(() => {
          resolve(movies);
        }, 2000)
      });

      let token = await promiseToMovies; // wait until the promise resolves (*)
      return token;
    },
    login: async (username: String, password: String) => {
      let promiseToLogin = new Promise((resolve, reject) => {
        setTimeout(() => {
          Auth.setAuth('sometoken')
          resolve(true);
        }, 3000);
      });

      let loginPromise = await promiseToLogin;
      return loginPromise;
    },

    logout: async () => {
      console.log('logged out clicked');

      let promiseToLogout = new Promise((resolve, reject) => {
        setTimeout(() => {
          Auth.logout();
          resolve(true);
        }, 3000);
      });
      let logoutPromise = await promiseToLogout;
      return logoutPromise;
    }
  }
}