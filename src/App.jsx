import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

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
      
      { characters && <h2>Number of characters: {characters.length}</h2> }
  
      {characters === null
        ? <p>loading...</p>
        : characters.length && characters.map((characterDetails, index) => {
          return (
            <section key={index} className='card'>
              <h3>{characterDetails.name}</h3>
              <p>Occupation: {characterDetails.occupation}</p>
            </section>
          )
        })}
    </>
    
  )
}

export default App
