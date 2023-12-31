import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

import { privateRoutes, publicRoutes } from '../routes/routes';

export default function AppRouter() {

  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <span className="posts__loader"></span>
  }

  return (
    <>
      {isAuth
        ? <Routes>
          {privateRoutes.map((route) =>
            <Route
              exact={route.exact}
              path={route.path}
              element={route.component}
              key={route.path}
            />
          )}
          <Route
            exact
            path="/login"
            element={<Navigate to="/home" replace />}
          />
          <Route
            exact
            path="/"
            element={<Navigate to="/home" replace />}
          />
        </Routes>
        : <Routes>
          {publicRoutes.map((route) =>
            <Route
              exact={route.exact}
              path={route.path}
              element={route.component}
              key={route.path}
            />
          )}
          <Route
            exact
            path="*"
            element={<Navigate to="/login" replace />}
          />
        </Routes>}
    </>
  )
}
