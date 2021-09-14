import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "../ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./VetExpress.css";

export const VetExpress = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("VetExpress_user")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);
