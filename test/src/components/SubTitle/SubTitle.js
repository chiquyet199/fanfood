import React from 'react'
import PropTypes from 'prop-types'
import Title from '../Title/Title';
import './SubTitle.css'

const SubTitle = props => (
  <Title className="sub-title" as="span" {...props}/>
)

SubTitle.propTypes = {
  as: PropTypes.string,
}

export default SubTitle
