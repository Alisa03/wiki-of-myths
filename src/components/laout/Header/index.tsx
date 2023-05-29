import { HeaderContainer, HeaderLink, Nav } from "./styles"

const Header = () => {

    return (
        <HeaderContainer>
            <Nav>
                <HeaderLink to="/wiki-of-myths/">главная</HeaderLink>
            </Nav>
        </HeaderContainer>
    )
}

export default Header