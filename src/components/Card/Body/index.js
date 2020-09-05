import React from "react"
import Layout from "./Layout"
import Text from "./Text"
import Media from "./Media"
import { post } from "./_content"

const Body = () => {

    return (<Layout>
        <Text content={post.text} />
        <Media />
    </Layout>)
}
export default Body