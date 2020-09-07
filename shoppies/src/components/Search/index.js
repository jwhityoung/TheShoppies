import React from 'react';
import Card from 'react-bootstrap/Card'

function Search(props){
    return (
            <Card>
                <Card.Body>
                    <h3>Movie Search</h3>
                <form>
                    <input 
                        placeholder=""
                        className="userInput" 
                        name="search" 
                        onChange={(e) => props.searchHandler(e.target.value)}
                    />
                </form>
                </Card.Body>
                </Card>
    )
}

export default Search;