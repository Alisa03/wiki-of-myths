import { useParams } from "react-router-dom";

import useVisible from "../../hooks/useVisible";

import { Button, Block, Title3, Container } from "../../assets/styles/styledComponents";

import LinkBlock from "../ui/LinkBlock"

const ListGods = ({ data }: any) => {
    const { id } = useParams();
    const { showMore, visible } = useVisible()

    return (
        <>
            {
                data &&
                <Container>
                    <Title3>Боги</Title3>
                    <Block>
                        {data?.slice(0, visible).map((god: any) =>
                            <LinkBlock key={god.id} to={`/wiki-of-myths/mythology/${id}/${god.id}`} name={god.name} img={`..${god.img}`} />)
                        }
                    </Block>
                    <Block style={{ margin: "20px 0" }}>
                        {data && (data.length > visible) && <Button onClick={showMore}>Показать еще</Button>}
                    </Block>
                </Container>
            }
        </>
    )
}

export default ListGods