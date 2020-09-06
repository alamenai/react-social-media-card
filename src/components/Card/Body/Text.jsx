import React from "react"
import PropTypes from "prop-types"

const Text = ({ content }) => (
    <div className="mt-2 mb-4 mx-4">
        <p className="text-sm text-justify">
            {content.split(" ").map((str) => {
                if (str.startsWith("#")) {
                    return <a href={`/${str}`} className="text-blue-500">{str} </a>;
                }
                return str + " ";
            })}</p>
    </div>
)

Text.propTypes = {
    content: PropTypes.string.isRequired
}

Text.defaultProps = {
    content: "Welcome to social card component made by Menai Ala Eddine"
}

export default Text