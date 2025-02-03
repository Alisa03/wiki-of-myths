import React from "react"

import { TextLinks } from "../app/styles/styledComponents"

interface IProps {
    text: string,
}

class LinksText extends React.Component<IProps> {
    render() {
        const regex = /([А-я0-9\s\n\.\-;,:]+)|(((\/wiki-of-myths\/mythology\/\w+\/\w+\s)?)({([\s\S]+?)}))/gim
        var res: any[] = []

        this.props.text && this.props.text.replace(regex, (m, text, fr, names, link, rf): any => {
            res.push(link ? <TextLinks to={link} key={res.length}>{rf.replace(/([{}])/gim, '')}</TextLinks> : text)

            return {m, fr, names}
        })

        return <>{res}</>
    }
}

export default LinksText