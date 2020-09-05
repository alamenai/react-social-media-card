import React from "react"
import PropTypes from "prop-types"
import { DEFAULT_POST_PHOTO_URL } from "../../../constants/paths"

const Media = ({ source, alt }) => (
    <div>
        <img
            src={source}
            alt={alt}
            className="xs:h-48  w-full" />
    </div>

)

Media.propTypes = {
    source: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

Media.defaultProps = {
    source: DEFAULT_POST_PHOTO_URL,
    alt: DEFAULT_POST_PHOTO_URL,
}
export default Media