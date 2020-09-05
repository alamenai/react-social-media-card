import React from "react"
import PropTypes from "prop-types"
import { DEFAULT_USER_PHOTO_URL } from "../../../constants/paths"

const Avatar = ({ source, url, alt }) => (
    <div>
        <a href={url}>
            <img
                src={source}
                alt={alt}
                className="w-12 rounded-full cursor-pointer" />
        </a>
    </div>
)

Avatar.propTypes = {
    source: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

Avatar.defaultProps = {
    source: DEFAULT_USER_PHOTO_URL,
    alt: "random user photo",
    url: "Menai-Ala-Eddine"
}

export default Avatar