import React from 'react'
import UserInfoItem from '../UserInfoItem/UserInfoItem'
import PropTypes from 'prop-types'
import './Person.css'

const Person = props => {
  const {avatar, name, location} = props.person
  return (
    <div className="person">
      <UserInfoItem avatar={avatar} title={name} desc={location} />
    </div>
  )
}

Person.propTypes = {
  person: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string
  }).isRequired
}

export default Person
