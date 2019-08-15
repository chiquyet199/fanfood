import React, {useContext} from 'react'
import Home from '../components/Home/Home'
import {AppContext} from '../App'

const HomeContainer = () => {
  const {state, actions} = useContext(AppContext)
  return <Home onUserClick={actions.showPerson} userNames={state.userNames}/>
}

export default HomeContainer