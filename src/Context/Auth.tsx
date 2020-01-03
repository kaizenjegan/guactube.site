import React, { useState, createContext } from "react";
import { useHistory, withRouter } from "react-router-dom";
const axios = require("axios");

//https://auth0.com/blog/handling-authentication-in-react-with-context-and-hooks/
interface IContextProps {
  authenticated: boolean;
  Login: (userName: string, password: string) => void;
  Logout: () => void;
  user: User;
  error: any;
}

interface User {
  username: string | undefined;
  token: string | undefined;
}

const InitialUser: User = {
  username: undefined,
  token: undefined
};

export const AuthContext = createContext({} as IContextProps);


const AuthContextProvider = (props: any) => {

  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User>(InitialUser);
  const [error, setError] = useState<{} | null>(null);

  let history = useHistory();

  const setuserInfo = (name: string | undefined, token: string | undefined) => {
    setUser({ ...user, username: name, token: token });
  };

  const Login = (userName: string, password: string) => {
    console.log(`username: ${userName}`);
    setError(null);
    getToken(userName, password).then(token => {
      setAuth(token as string);
      setuserInfo(userName, token as string);
      setAuthenticated(true);

      history.push("/");
    });
  };

  const Logout = () => {
    removeAuth();

    setAuthenticated(false);
    setuserInfo(undefined, undefined);

    history.push("/login");
  };

  const getToken = async (username: any, password: any) => {
    let promiseToLogin = new Promise((resolve, reject) => {
      // axios
      //   .post(process.env.REACT_APP_GEM_TOKEN_ENDPOINT, {
      //     Username: username,
      //     Password: password
      //   })
      //   .then((response: any) => {
      //     const token = response.data.token;
      //     resolve(token);
      //   })
      //   .catch((error: any) => {
      //     setError(error.response);
      //   });


      setTimeout(() => {
        resolve('fake-token');
      }, 3000);
    });

    let token = await promiseToLogin; // wait until the promise resolves (*)



    return token;
  };

  const setAuth = (token: string) => {
    localStorage.setItem("token", token);
  };

  const removeAuth = () => {
    // Todo: Add more stuff here as we decide what to do on logout
    localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated,
        Login,
        Logout,
        error
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default withRouter(AuthContextProvider);
