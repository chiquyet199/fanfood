import React from 'react'
import PropTypes from 'prop-types'
import './Title.css'

const Title = ({as: T, className, ...props}) => (
  <T className={`title ${className}`} {...props} />
)

Title.propTypes = {
  as: PropTypes.string
}

Title.defaultProps = {
  as: 'h3',
  className: ''
}

export default Title
