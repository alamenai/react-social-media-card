import React, { useState } from "react"
import Layout from "./Layout"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import Overlay from "./Overlay"
import Actions from "./Actions"
import { Context as OverlayContext } from "./Overlay/context"

const Card = () => {

    const [visibility, setVisibility] = useState(false)
    const value = { visibility, setVisibility }

    return <OverlayContext.Provider value={value}>
        <div className="w-full flex justify-center">
            <Layout>
                <Header />
                <Body />
                <Footer />
                <Overlay>
                    <Actions />
                </Overlay>
            </Layout>
        </div>
    </OverlayContext.Provider>
}

export default Card