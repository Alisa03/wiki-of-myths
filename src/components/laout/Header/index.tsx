import { HeaderContainer, HeaderLink, Nav, Dropdown } from "./styles"

import json from "../../../../server/db.json"

const Header = () => {
    const list = json.mythology

    return (
        <HeaderContainer>
            <Nav>
                <HeaderLink to="/wiki-of-myths/">главная</HeaderLink>
                <Dropdown>
                    <p>Мифологии</p>
                    <ul>
                        {list.map((item: any) => <li key={item.id}><HeaderLink to={`/wiki-of-myths/mythology/${item.id}`}>{item.name}</HeaderLink></li>)}
                    </ul>
                </Dropdown>
            </Nav>
        </HeaderContainer>
    )
}

export default Header