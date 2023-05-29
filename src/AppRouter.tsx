import { Route, Routes, useNavigate, useRoutes } from "react-router-dom"

import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import Mythology from "./pages/Mythology"
import God from "./pages/God"

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/wiki-of-myths/" element={<Home />} />
            <Route path="/wiki-of-myths/mythology/:id" element={<Mythology />} />
            <Route path="/wiki-of-myths/mythology/:id/:godsId" element={<God />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRouter
