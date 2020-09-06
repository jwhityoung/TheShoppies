import React from 'react';

function Search(props){
    return (
            <div className="search">
                <form>
                    <input 
                        placeholder=""
                        className="userInput" 
                        name="search" 
                        onChange={(e) => props.searchHandler(e.target.value)}
                    />
                </form>
            </div>
    )
}

export default Search;