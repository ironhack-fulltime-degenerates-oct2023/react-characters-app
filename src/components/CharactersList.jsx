import { Link } from "react-router-dom";

function CharactersList({charactersArr}) {
    return (
        <div className="CharactersList">

            {charactersArr && <h2>Number of characters: {charactersArr.length}</h2>}

            {charactersArr === null
                ? <p>loading...</p>
                : charactersArr.length && charactersArr.map((characterDetails, index) => {
                    return (
                        <section key={index} className='card'>
                            <h3>{characterDetails.name}</h3>
                            <p>Occupation: {characterDetails.occupation}</p>

                            <Link to={`/characters/${characterDetails.id}`}>More Details</Link>

                        </section>
                    )
                })}
        </div>
    );
}

export default CharactersList;