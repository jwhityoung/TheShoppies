import React from 'react';
import Movie from '../Movie';
import Card from 'react-bootstrap/Card';
import './style.css';

function Nominated(props){
    return (
        <Card style={{backgroundColor: '#F5F5F5'}}>
            <Card.Body>
            <h4 className="nominations-header">Nominations</h4>
            <hr></hr>
            {!!props.nominations.length 
                ? <ul className="nominations-list">
                    {props.nominations.map((movie, i) =>{
                        return <Movie 
                        poster={movie.Poster}
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
                : <h5 className="no-nominations" style={{color: '#A3A3A3', textAlign: 'center'}}>No nominations yet</h5>
            }
            </Card.Body>
      </Card>
    )
}

export default Nominated;