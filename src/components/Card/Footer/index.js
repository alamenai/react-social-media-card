import React, { useState } from "react"
import Layout from "./Layout"
import Interaction from "./Interaction"
import {
    LOVE_ICON,
    LOVE_ICON_FILLED,
    COMMENT_ICON,
    SHARE_ICON,
} from "../../../constants/icons"

const Footer = () => {

    const [loveIcon, setLoveIcon] = useState(LOVE_ICON)
    const [isLoved, setLoved] = useState(false)
    const [loveCount, setLoveCount] = useState(50)
    const [color, setColor] = useState("#000")

    const love = () => {
        if (!isLoved) {
            setLoveIcon(LOVE_ICON_FILLED)
            setLoveCount(loveCount => loveCount + 1)
            setColor("#EF0D6C")
            setLoved(true)
            return
        }
        setLoveIcon(LOVE_ICON)
        setLoveCount(loveCount => loveCount - 1)
        setColor("#000")
        setLoved(false)
    }

    return <Layout>
        <Interaction
            icon={loveIcon}
            count={loveCount}
            interact={love}
            color={color} />
        <Interaction icon={COMMENT_ICON} count={11} />
        <Interaction icon={SHARE_ICON} count={20} />
    </Layout>
}

export default Footer