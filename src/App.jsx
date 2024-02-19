import React, { Suspense } from "react";
// packages
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Layout from './layout/index'
import PrivateRoute from "./privateRoute";

//style
import './App.scss';

// Lazy loading
const Dashboard = React.lazy(() => import("./pages/dashboard"));
const ExploreCars = React.lazy(()=> import('./pages/exploreCars'))


function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            </Suspense>
          }
        >
          <Route
            path={'/dashboard'}
            element={
              <Suspense>
                <Dashboard />
              </Suspense>
            }
          ></Route>
           <Route
            path={'/explore-cars'}
            element={
              <Suspense>
                <ExploreCars />
              </Suspense>
            }
          ></Route>
        </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
