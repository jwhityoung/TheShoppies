import React, { useState, useEffect, useRef } from 'react';
import Button from '../Button';
import Shoppies from '../../assets/Shoppies.png';
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
        <div>
            <p className={`movie${props.added ? ' movie--added' : ''}${onRemove}`}>
                <div>
                    <h4>{props.title}</h4>
                    <p>{props.year}</p>
                    <Button
                        nominationHandler={() => handleNomination(props.movie)}
                        class={props.class}
                        enabled={props.enabled}
                        movie={props.movie}
                        style={{ float: 'right' }}
                    />
                </div>
            </p>
        </div>
    )

}

export default Movie;