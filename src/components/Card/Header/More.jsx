import React, { useContext } from "react"
import { MORE_ICON } from "../../../constants/icons"
import { Context as OverlayContext } from "../Overlay/context"

const More = () => {

    const { setVisibility } = useContext(OverlayContext)

    return (<img
        src={MORE_ICON}
        alt="Options"
        className="ml-auto w-6 h-6 cursor-pointer"
        onClick={() => setVisibility(true)}
    />)
}

export default More