import React from "react"
import Layout from "./Layout"
import Avatar from "./Avatar"
import UserInfo from "./UserInfo"
import More from "./More"

const Header = () => (
    <Layout>
        <Avatar />
        <UserInfo />
        <More />
    </Layout>
)

export default Header