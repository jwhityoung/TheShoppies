import React from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import InputGroup from 'react-bootstrap/InputGroup';
import './style.css'

function Search(props) {
    return (
    
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1" style={{background: "transparent"}}> <FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <input
                            placeholder="Search for a movie to nominate"
                            className="user-input"
                            name="search"
                            onChange={(e) => props.searchHandler(e.target.value)}
                        /> 
                    </InputGroup>
            
    )
}

export default Search;