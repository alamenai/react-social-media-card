import React, { useContext } from "react"
import { Context } from "./context"

const Overlay = ({ children }) => {

    const { visibility, setVisibility } = useContext(Context)

    const hide = e => {
        setVisibility(false);
    }

    return (visibility &&
        <div className={`absolute left-0 right-0 bg-black top-0 bottom-0 bg-black-50 rounded-xl flex flex-col align-baseline justify-center items-center`}
            onClick={hide}>
            {children}
        </div>)
}

export default Overlay