import React, { useContext } from "react"
import { MORE_ICON } from "../../../constants/icons"
import { Context as OverlayContext } from "../Overlay/context"

const More = () => {

    return (<img
        src={MORE_ICON}
        alt="Options"
        className="ml-auto w-6 h-6 cursor-pointer"
    />)
}

export default More