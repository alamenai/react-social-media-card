import React, { useContext } from "react"
import { Context } from "./context"

const Overlay = () => {

    const { visibility } = useContext(Context)
    return visibility && <div className={`absolute left-0 right-0 bg-black top-0 bottom-0 opacity-50 rounded-xl`}>
    </div>
}

export default Overlay