import React, {useContext} from 'react'
import {AppContext} from '../App'
import NavBar from '../components/NavBar/NavBar'
import HomeContainer from './HomeContainer'
import PersonContainer from './PersonContainer'
import './AnimateLayout.css'

const AnimateLayout = props => {
  const {state, actions} = useContext(AppContext)
  const {activePage, activeUser} = state
  return (
    <div className={`layout ${activePage === 'home' ? '' : 'moved'}`}>
      <div className="current">
        <NavBar title="home"/>
        <HomeContainer/>
      </div>
      <div className="next">
        <NavBar onBack={actions.back} title="person"/>
        {activeUser && <PersonContainer/>}
      </div>
    </div>
  )
}

export default AnimateLayout

/** 
 * // <Icon.Back className={`${activePage === 'next' ? '' : 'moved'}`} style={{position: 'absolute',
      //   fill: 'blue',
      //   top: 35}}/>
*/