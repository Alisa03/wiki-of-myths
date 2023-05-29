import { Loader, Main } from "./styles"

const Loading = (loading: any) => {
    return (
        <>
            {loading &&
                <Main>
                    <Loader></Loader>
                </Main>
            }
        </>
    )
}

export default Loading