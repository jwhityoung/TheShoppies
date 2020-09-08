import React from 'react';
import Movie from '../Movie';
import Searching from '../Searching';
import Card from 'react-bootstrap/Card';
import './style.css';
import Search from '../Search'


function Results(props){
 return (
        <Card style={{backgroundColor: '#F5F5F5', marginBottom: '50px'}}>
           <Card.Body>
               <h4 className="results-header">Movie Results</h4>
               <hr></hr>
            {(!props.searchInProgress && !props.results.length) &&
            <h5 style={{color: '#A3A3A3', textAlign: 'center'}}>Search a movie to nominate</h5>
            }
            {!!props.results.length && <ul className="results-list">

                {props.results.map(movie=>{
                    return <Movie 
                    poster={movie.Poster}
                        title={movie.Title}
                        year={movie.Year}
                        key={movie.imdbID}
                        movie={movie}
                        nominationHandler={props.nominationHandler}
                        class={'Nominate'}
                        enabled={movie.nominated || props.complete ? false : true}            
                    />
                    
                })}
            
            </ul>}
            {(!props.results.length && props.searchInProgress) && <ul className="results-list">
                    <Searching />
                    <Searching />
                    <Searching />
                </ul>}
               
                </Card.Body>
                </Card>
    )
}

export default Results;