import { useEffect, useState } from "react"
import { HeaderContainer, HeaderLink, Nav, Dropdown, DropdownList, DropdownItem } from "./styles"

import { HOME_ROUTE, MYTHOLOGY_ROUTE } from "~/shared/utils/consts"

export const Header = () => {
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState<string[]>()

    useEffect(() => {
        fetch(`/server/db.json`)
            .then((response) => {
                setIsLoading(true)
                return response.json()
            })
            .then((data) => {
                setData(data.mythology)
            }
            )
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false))
    }, [])

    if (isError) return <p>Error</p>

    return <HeaderContainer>
        <Nav>
            <HeaderLink to={HOME_ROUTE}>главная</HeaderLink>
            <Dropdown>
                <p>Мифологии</p>
                <DropdownList>
                    {
                        isLoading ? <p>Loading...</p>
                            : !!data?.length && data.map((item: any) =>
                                <DropdownItem key={item.id}>
                                    <HeaderLink to={`${MYTHOLOGY_ROUTE}${item.id}`}>{item.name}</HeaderLink>
                                </DropdownItem>
                            )}
                </DropdownList>
            </Dropdown>
        </Nav>
    </HeaderContainer>
}