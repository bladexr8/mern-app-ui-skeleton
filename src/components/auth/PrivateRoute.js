// declare protected routes for the frontend to restrict view access based on user auth.

import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import auth from './auth-helper'

/*const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    auth.isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Navigate to={{
        pathname: '/signin',
        state: { from: props.location }
      }} />
    )
  )} />
)*/

const PrivateRoute = () => {
  const authenticated = auth.isAuthenticated;

  return authenticated ? <Outlet /> : <Navigate to='/signin' ></Navigate>
}


export default PrivateRoute;