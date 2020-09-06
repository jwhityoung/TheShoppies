import React from 'react';
import Movie from '../Movie';

function Nominated(props){
    return (
        <section className="nominated">
            <h3 className="nominationsHeader">Nominations:</h3>
            {!!props.nominations.length 
                ? <ul className="nominationsList">
                    {props.nominations.map((movie, i) =>{
                        return <Movie 
                            title={movie.Title}
                            year={movie.Year}
                            key={movie.imdbID}
                            movie={movie}
                            nominationHandler={props.nominationHandler}
                            class={'remove'}
                            enabled={true}
                            added={i===props.nominations.length-1 && props.added ? true : false}              
                        />
                    })}
                </ul>
                : <h3 className="nominations__empty">No nominations yet</h3>
            }
        </section>
    )
}

export default Nominated;