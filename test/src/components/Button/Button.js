import React from 'react'
import PropTypes from 'prop-types'
import Title from '../Title/Title'
import * as Icon from '../Icon/Icon'
import './Button.css'

const IconMapper = {
  back: <Icon.Back className="white"/>
}

const Button = ({as: T, className, icon, text, ...props}) => (
  <T className={`btn ${className}`} {...props}>
    {icon && IconMapper[icon]}
    <Title as="span">{text}</Title>
  </T>
)

Button.propTypes = {
  as: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

Button.defaultProps = {
  as: 'button',
  className: '',
}

export default Button
