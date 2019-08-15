import React, {useState, useEffect, useContext} from 'react'
import Person from '../components/Person/Person'
import Title from '../components/Title/Title'
import {AppContext} from '../App'

const useFetch = url => {
  const [state, setState] = useState({
    loading: true,
    error: false,
    data: null,
  });
  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(data => setState({ loading: false, error: false, data }))
      .catch(error => setState({ loading: false, error, data: [] }));
  }, [url]);
  
  return state;
};

const PersonContainer = () => {
  const {activeUser} = useContext(AppContext).state
  const {loading, error, data} = useFetch(`https://api.github.com/users/${activeUser}`)
  const toPerson = ({avatar_url, name, location}) => ({name, location, avatar: avatar_url})
  return (
    <>
      {loading && <Title as="h2">Loading...</Title>}
      {error && <Title as="h2">Opps! Something went wrong.</Title>}
      {data && <Person person={toPerson(data)}/>}
    </>
  )
}

export default PersonContainer