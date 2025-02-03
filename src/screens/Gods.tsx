import { useParams } from "react-router-dom";

import { Block, Container, H3 } from "~/app/styles/styledComponents";

import { LinkBlock, VisibleButton } from "~/fuaters";

import { useVisible } from "~/shared/hooks";
import { MYTHOLOGY_ROUTE } from "~/shared/utils/consts";

export const Gods = ({ data }: any) => {
    const { id } = useParams();
    const { showMore, visible } = useVisible()

    return data &&
        <Container>
            <H3>Боги</H3>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "30px",
                justifyItems: "center"
            }}>
                {
                    data?.slice(0, visible).map((god: any) =>
                        <LinkBlock
                            key={god.id} to={`${MYTHOLOGY_ROUTE}${id}/${god.id}`}
                            name={god.name} img={"/" + id + "/" + god.id + ".webp"}
                        />
                    )
                }
            </div>
            <Block style={{ margin: "20px 0" }}>
                <VisibleButton list={data.length} visible={visible} showMore={showMore} />
            </Block>
        </Container>
}