import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '../Avatar/Avatar'
import Title from '../Title/Title'
import SubTitle from '../SubTitle/SubTitle'
import './UserInfoItem.css'

const UserInfoItem = props => {
  const {avatar, title, desc} = props
  return (
    <div className="user-info-item">
      <Avatar src={avatar} alt=""/>
      <div className="user-info">
        <Title>{title}</Title>
        <SubTitle>{desc}</SubTitle>
      </div>
    </div>
  )
}

UserInfoItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
}

export default UserInfoItem