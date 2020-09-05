import React from "react"
import PropTypes from "prop-types"

const UserInfo = ({ username, time, location }) => {

    const normalizeUserLink = () => {
        return username.replaceAll(" ", "-")
    }

    return (< div className="flex flex-col ml-2" >
        <a href={normalizeUserLink()}
            className="font-bold text-sm mb-0 leading-tight tracking-wide cursor-default hover:text-indigo-800">{username}
        </a>
        <p className="font-normal text-xs text-gray-600 mt-0">{time} • {location}</p>
    </div >)
}

UserInfo.propTypes = {
    username: PropTypes.string.isRequired
}

UserInfo.defaultProps = {
    username: "Menai Ala Eddine",
    time: new Date().getHours() + " hours ago",
    location: "Algeria",
}

export default UserInfo