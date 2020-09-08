import React, { useState, useEffect, useRef } from 'react';
import Button from '../Button';
import Popcorn from '../../assets/placeholder.png';
import './style.css';
import ListGroup from 'react-bootstrap/ListGroup'

function Movie(props) {
    const [onRemove, setOnRemove] = useState('');
    let refRemove = useRef()

    const handleNomination = (movie) => {
        if (props.class === 'remove') {
            setOnRemove(' movie--remove')
        } else {
            props.nominationHandler(movie)
        }
    }

    useEffect(() => {
        if (onRemove) {
            let id = setTimeout(() => {
                props.nominationHandler(props.movie)
            }, 400)
            refRemove.current = id;
            return () => clearTimeout(refRemove.current)
        }
    }, [onRemove])

    return (
        <div className="container movie-container">
                

            <div className={`movie${props.added ? ' movie--added' : ''}${onRemove}`}>
            <div className="row">   
<div className="col-md-4" >
            <img 
                className={props.poster==='N/A' ? "movie__trophy" : "movie__poster"} 
                src={props.poster==='N/A' ? Popcorn: props.poster} 
                alt={props.poster==='N/A' ? 'popcorn' : "Poster"}
                style={{width: '125px', height: '175px', marginLeft: '0px'}}
            />
            </div>
            <div className="col-md-5">
                <div>
                    <h5>{props.title}</h5>
                    <p>{props.year}</p>
                    </div>
                    </div>
                    
                    
                    <div className="col-md-3">
                    <Button
                        nominationHandler={() => handleNomination(props.movie)}
                        class={props.class}
                        enabled={props.enabled}
                        movie={props.movie}
                    />
                    </div>
                    </div>
                
            </div>
            <hr></hr>
        </div>
    )

}

export default Movie;