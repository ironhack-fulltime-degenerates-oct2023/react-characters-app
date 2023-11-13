import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CharacterDetails() {

    const {characterId} = useParams();

    const [characterDetails, setCharacterDetails] = useState({});

    useEffect(() => {
        axios.get(`https://ih-crud-api.herokuapp.com/characters/${characterId}`)
            .then(response => {
                setCharacterDetails(response.data)
            })
            .catch(error => {
                console.log("Error getting character details from the API...");
                console.log(error)
            })
    }, []);


    return (
        <div className="CharacterDetails">

            <div className="card">
                <h1>{characterDetails.name}</h1>
                <p>Weapon: {characterDetails.weapon}</p>
                <p>Occupation: {characterDetails.occupation}</p>
            </div>

            <Link to="/">Back</Link>
        </div>
    )
}

export default CharacterDetails;