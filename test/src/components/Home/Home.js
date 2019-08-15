import React from 'react'
import Title from '../Title/Title'
import Button from '../Button/Button'
import PropTypes from 'prop-types'
import './Home.css'

const Home = props => {
  const {userNames, onUserClick} = props

  const handleUserItemClick = name => () => {
    onUserClick(name)
  }

  const renderUser = username => {
    return (
      <Button
        key={username}
        onClick={handleUserItemClick(username)}
        className="user"
        text={username}
      />
    )
  }

  return (
    <div className="home">
      <Title as="h1">Top 5 GitHub Users</Title>
      <Title as="h5">Tap the username to see more information</Title>
      {userNames.map(renderUser)}
    </div>
  )
}

Home.propTypes = {
  userNames: PropTypes.array.isRequired,
  onUserClick: PropTypes.func,
}

Home.defaultProps = {
  onUserClick: () => {
    console.log('clicked')
  },
}

export default Home
