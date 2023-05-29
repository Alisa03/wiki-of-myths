import { useParams, useRouteError } from "react-router-dom";
import { Main } from "../components/ui/Loading/styles"

const NotFound = (data: any) => {
    return (
        <Main>
            <h1 style={{ fontSize: "50vw" }}>404</h1>
        </Main>
    )
}

export default NotFound