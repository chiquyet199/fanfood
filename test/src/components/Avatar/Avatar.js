import React from 'react'
import PropTypes from 'prop-types'
import './Avatar.css'

const Avatar = ({src, alt, className, ...props}) => {
  return (
    <img className={`avatar ${className}`} alt={alt} src={src}  {...props} />
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
}

Avatar.defaultProps = {
  className: ''
}

export default Avatar
