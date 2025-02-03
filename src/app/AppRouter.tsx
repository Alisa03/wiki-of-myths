import { createBrowserRouter } from "react-router-dom"

import * as Path from "~/shared/utils/consts"
import * as Page from "~/pages"
import { Layout } from "~/screens/Layout";

import './styles/index.css'

export const router = createBrowserRouter([
    {
        id: "root",
        path: Path.HOME_ROUTE,
        element: <Layout />,
        children: [
            {
                path: "/",
                Component: Page.Home
            },
            {
                path: Path.MYTHOLOGY_ROUTE + ":id",
                Component: Page.Mythology,
            },
            {
                path: Path.MYTHOLOGY_ROUTE + ":id/:godsId",
                Component: Page.God,
            },
            {
                path: '*',
                Component: Page.NotFound
            },
        ],
    },
]);