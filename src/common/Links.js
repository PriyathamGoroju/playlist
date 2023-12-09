import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Verify from "../pages/OTP";

export const Links = [
    {
        name: "Home",
        path: "/home",
        element: <Home />,
        showInNavigation: true,
    },
    {
        name: "Login",
        path: "/login",
        element: <Login />,
        showInNavigation: true,
    },
    {
        name: "Verify",
        path: "/verify",
        element: <Verify />,
        showInNavigation: true,
    },
    {
        name: "Login",
        path: "/",
        element: <Login />,
        showInNavigation: true,
    },
];
