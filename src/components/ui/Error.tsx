import { Text } from "../../assets/styles/styledComponents"

const Error = ({ error }: any) => {
    return (
        <>
            {error && <Text>{error}</Text>}
        </>
    )
}

export default Error