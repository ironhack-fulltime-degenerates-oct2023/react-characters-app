import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import CharactersList from './components/CharactersList';
import CharacterDetails from './components/CharacterDetails';

function App() {
  
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    axios.get("https://ih-crud-api.herokuapp.com/characters")
      .then((response) => {
        setCharacters(response.data)
      })
      .catch((error) => {
        console.log("Error getting characters from the API...")
        console.log(error)
      })
  }, []);



  return (
    <>

      <h1>React Characters App</h1>

      <Routes>
        <Route path='/' element={<CharactersList charactersArr={characters} />} />
        <Route path='/characters/:characterId' element={<CharacterDetails />} />
      </Routes>


    </>
    
  )
}

export default App
