import React from "react"

import { Text } from "~/app/styles/styledComponents"

interface IProps { text: string }

class ProviewText extends React.Component<IProps> {
    render() {
        const regex = /([А-я0-9\s\n\.\-;,:]+)|(((\/wiki-of-myths\/mythology\/\w+\/\w+\s)?)({([\s\S]+?)}))/gim
        var res: any[] = []

        this.props.text && this.props.text.replace(regex, (m, text, fr, names, link, rf): any => {

            res.push(rf ? <span key={res.length}>{rf.replace(/([{}])/gim, '')}</span> : text)
            return {m, fr, names, link}
        })

        return <Text>{res}</Text>
    }
}

export default ProviewText