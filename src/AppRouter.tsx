import { Route, Routes } from "react-router-dom"

import { HOME_ROUTE, MYTHOLOGY_ROUTE } from "./utils/consts"

import God from "./pages/God"
import Mythology from "./pages/Mythology"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"

const AppRouter = () => {

    return (
        <Routes>
            <Route path={HOME_ROUTE} element={<Home />} />
            <Route path={`${MYTHOLOGY_ROUTE}:id`} element={<Mythology />} />
            <Route path={`${MYTHOLOGY_ROUTE}:id/:godsId`} element={<God />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRouter
