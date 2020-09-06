import React from "react"

const Context = React.createContext({
    visibility: false,
    setVisibility: () => { }
})

export { Context }