import React, { useState, useEffect, useRef } from 'react';
import Button from '../Button';

function Movie(props){
    const [onRemove, setOnRemove] = useState('');
    let refRemove = useRef()

    const handleNomination = (movie) => {
        if(props.class==='remove'){
            setOnRemove(' movie--remove')
        } else {
            props.nominationHandler(movie)
        }
    }

    useEffect(() => {
        if(onRemove){
            let id  = setTimeout(()=> {
                props.nominationHandler(props.movie)
            }, 400)
            refRemove.current = id;
            return () => clearTimeout(refRemove.current)
        }
    }, [onRemove])

    return (
        <li className={`movie${props.added ? ' movie--added' : ''}${onRemove}`}>
            <div>
                <h3>{props.title}</h3>
                <p>{props.year}</p>
            </div>
            <Button 
                nominationHandler={() => handleNomination(props.movie)}
                class={props.class}
                enabled={props.enabled}
                movie={props.movie}
            />
        </li>
    )
    
}

export default Movie;