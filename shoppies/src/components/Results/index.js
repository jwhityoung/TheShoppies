import React from 'react';
import Movie from '../Movie';
import Searching from '../Searching';

function Results(props){
    return (
        <section className="results">
            <h4 className="resultsHeader">Results: </h4>
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
        </section>
    )
}

export default Results;