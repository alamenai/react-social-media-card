import React from "react"
import Layout from "./Layout"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"

const Card = () => {
    return <div className="w-full flex justify-center">
        <Layout>
            <Header />
            <Body />
            <Footer />
        </Layout>
    </div>
}

export default Card