import { useParams } from "react-router-dom";

import useVisible from "../../hooks/useVisible";
import { MYTHOLOGY_ROUTE } from "../../utils/consts";

import { Block, Title3, Container } from "../../assets/styles/styledComponents";

import LinkBlock from "../ui/LinkBlock"
import VisibleButton from "../ui/VisibleButton";

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
                        {
                            data?.slice(0, visible).map((god: any) =>
                                <LinkBlock
                                    key={god.id} to={`${MYTHOLOGY_ROUTE}${id}/${god.id}`}
                                    name={god.name} img={"/" + id + "/" + god.id + ".webp"}
                                />
                            )
                        }
                    </Block>
                    <Block style={{ margin: "20px 0" }}>
                        <VisibleButton list={data} visible={visible} showMore={showMore} />
                    </Block>
                </Container>
            }
        </>
    )
}

export default ListGods