import React, {useState} from 'react'
import AnimateLayout from './containers/AnimateLayout'
import './App.css'

export const AppContext = React.createContext()

const initState = {
  userNames: [
    'GrahamCampbell',
    'fabpot',
    'weierophinney',
    'rkh',
    'josh',
  ],
  goback: false,
  activePage: 'home',
  activeUser: null,
}

function App() {
  const [appState, setAppState] = useState(initState)
  const showPerson = name => {
    setAppState({
      ...appState,
      activePage: 'person',
      goBack: false,
      activeUser: name,
      users: {
        ...appState.users,
        [name]: {avatar: '', name, location: 'VN'},
      },
    })
  }
  const back = () => {
    if (appState.activePage === 'home') return
    setAppState({...appState, activePage: 'home', goback: true})
  }
  const context = {
    state: appState,
    actions: {
      back,
      showPerson,
    },
  }
  return (
    <AppContext.Provider value={context}>
      <div className="App">
        <AnimateLayout/>
      </div>
    </AppContext.Provider>
  )
}

export default App
