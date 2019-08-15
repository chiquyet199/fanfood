import React from 'react'
import Title from '../Title/Title'
import Button from '../Button/Button'
import PropTypes from 'prop-types'
import './NavBar.css'

const NavBar = props => {
  const {onBack, title} = props
  return (
    <nav>
      <div className="left">
        {onBack && (
          <Button
            className="no-border"
            text={'Back'}
            icon="back"
            onClick={onBack}
          />
        )}
      </div>
      <div className="center">
        <Title as="h4">{title}</Title>
      </div>
      <div className="right" />
    </nav>
  )
}

NavBar.propTypes = {
  onBack: PropTypes.func,
  title: PropTypes.string.isRequired,
}

export default NavBar
