import { createBrowserRouter, Navigate } from "react-router-dom"

import { God, Home, Mythology } from "~/pages"

import { Layout } from "~/screens/Layout";

import * as Path from "~/shared/utils/consts"

import './styles/index.css'

export const router = createBrowserRouter([
    {
        id: "root",
        path: Path.HOME_ROUTE,
        element: <Layout />,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
                path: Path.MYTHOLOGY_ROUTE + ":id",
                element: <Mythology />,
            },
            {
                path: Path.MYTHOLOGY_ROUTE + ":id/:godsId",
                Component: God,
            },
            {
                path: '*',
                element: <Navigate to={Path.HOME_ROUTE} />
            },
        ],
    },
]);