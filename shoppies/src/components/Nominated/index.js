import React from 'react';
import Movie from '../Movie';
import Card from 'react-bootstrap/Card';
import './style.css';

function Nominated(props){
    return (
        <Card>
            <Card.Body>
            <h4 className="nominations-header">Nominations:</h4>
            {!!props.nominations.length 
                ? <ul className="nominations-list">
                    {props.nominations.map((movie, i) =>{
                        return <Movie 
                            title={movie.Title}
                            year={movie.Year}
                            key={movie.imdbID}
                            movie={movie}
                            nominationHandler={props.nominationHandler}
                            class={'Remove'}
                            enabled={true}
                            added={i===props.nominations.length-1 && props.added ? true : false}              
                        />
                    })}
                </ul>
                : <h3 className="no-nominations">No nominations yet</h3>
            }
            </Card.Body>
      </Card>
    )
}

export default Nominated;