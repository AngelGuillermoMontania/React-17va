import React, { useState, useEffect} from 'react'

export default function Characters() {

    const [character, setCharacter] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
                .then(data => setCharacter(data.results))
    }, [])

    return (
        <div className='container'>
            <div className="characters">
                {
                character.map(item => (
                    <div className='box' key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <div className='character'>
                            <h3 className="name">{item.name}</h3>
                            <p className="specie">{item.species}</p>
                            <p className="status">{item.status}</p>
                            <p className='gender'>{item.gender}</p>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}


/* import React, { Component } from 'react'

export default class characters extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
} */
