import React from "react"
import Overlay from "./Overlay"

const Layout = (props) => {
    return (<div className="xs:w-11/12 xs:mx-4 sm:w-3/4 sm:mx-3 md:w-1/2 md:mx-3
                            bg-white w-1/3 rounded-xl h-auto shadow-xl py-4 relative">
        <Overlay />
        {props.children}
    </div>)
}

export default Layout