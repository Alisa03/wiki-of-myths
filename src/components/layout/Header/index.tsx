import { HeaderContainer, HeaderLink, Nav, Dropdown, DropdownList, DropdownItem } from "./styles"

import json from "../../../../server/db.json"
import { HOME_ROUTE, MYTHOLOGY_ROUTE } from "../../../utils/consts"

const Header = () => {
    const list = json.mythology

    return (
        <HeaderContainer>
            <Nav>
                <HeaderLink to={HOME_ROUTE}>главная</HeaderLink>
                <Dropdown>
                    <p>Мифологии</p>
                    <DropdownList>
                        {list.map((item: any) =>
                            <DropdownItem key={item.id}>
                                <HeaderLink to={`${MYTHOLOGY_ROUTE}${item.id}`}>{item.name}</HeaderLink>
                            </DropdownItem>
                        )}
                    </DropdownList>
                </Dropdown>
            </Nav>
        </HeaderContainer>
    )
}

export default Header