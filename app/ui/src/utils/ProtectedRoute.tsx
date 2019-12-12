import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Auth } from './Auth';

export const ProtectedRoute = ({
  component,
  ...rest
}: any) => {
  console.log( Auth);
  // let auth = Auth.getAuth();

  const routeComponent = (props: any) => (Auth.getAuth()) ? (React.createElement(component, props)) :
    (
      <Redirect to={{ pathname: "/login" }} />
    );
  return <Route {...rest} render={routeComponent} />;
};
