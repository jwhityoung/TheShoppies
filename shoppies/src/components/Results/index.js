import React from 'react';
import Movie from '../Movie';
import Searching from '../Searching';
import Card from 'react-bootstrap/Card'

function Results(props){
    return (
        <Card>
           <Card.Body>
               <h4>Results</h4>
           
            {(!props.searchInProgress && !props.results.length)}
            {!!props.results.length && <ul className="resultsList">
                {props.results.map(movie=>{
                    return <Movie 
                        poster={movie.Poster}
                        title={movie.Title}
                        year={movie.Year}
                        key={movie.imdbID}
                        movie={movie}
                        nominationHandler={props.nominationHandler}
                        class={'nominate'}
                        enabled={movie.nominated || props.complete ? false : true}            
                    />
                })}
            </ul>}
            {(!props.results.length && props.searchInProgress) && <ul className="resultsList">
                    <Searching />
                    <Searching />
                    <Searching />
                </ul>}
                </Card.Body>
                </Card>
    )
}

export default Results;