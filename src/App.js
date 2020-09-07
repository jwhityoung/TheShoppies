import React from 'react';
import Search from './components/Search';
import Jumbo from './components/Jumbotron';
import Results from './components/Results';
import Nominated from './components/Nominated';
import './App.css'
import axios from 'axios';
 
const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

document.body.style.background = "#F7F7F3";

class App extends React.Component {


  state = {
    search: '',
    results: [],
    nominations: [],
    searching: false,
    added: false
  }
  
 
  

  handleSearch = (input) => {
    this.setState({search: input, searching: true})
  }

  addNomination = (movie) => {
    let currentResults = this.state.results.map(result => {
      if(movie.imdbID === result.imdbID){
        return {...result, nominated: true}
       } else { 
         return result;
       }
    })
    this.setState({
      results: currentResults,
      nominations: [...this.state.nominations, movie],
      added: true
    }, () => localStorage.setItem("nominations", JSON.stringify(this.state.nominations)))
  }

  removeNomination = (movie) => {
    let currentResults = this.state.results.map(result => {
      if(movie.imdbID === result.imdbID){
        return {...result, nominated: false}
       } else{ 
         return result;
       }
    })
    let currentNominations = this.state.nominations.filter(noms => noms.imdbID!==movie.imdbID)
    this.setState({
      results: currentResults,
      nominations: currentNominations
    }, () => localStorage.setItem("nominations", JSON.stringify(this.state.nominations)))
  }

  updateNominatedResults = (movies) => {
    let nominated = {};
    this.state.nominations.forEach(nominee => nominated[nominee.imdbID] = true);
    return movies.map(movie => nominated[movie.imdbID] ? {...movie, nominated: true} : movie)
  }

  componentDidMount(){
    let nominations = localStorage.getItem("nominations");
    if(nominations!==null){
      this.setState({nominations: JSON.parse(nominations)})
    }
  }

  componentDidUpdate(prevState){
    if((prevState.search !== this.state.search) && this.state.searching===true){
      if(this.state.search===''){
        this.setState({results: [], searching: false})
      } else {
        axios.get(`https://www.omdbapi.com/?s=${this.state.search}&apikey=${API_KEY}`)
        .then(movies => {
          if(movies.data.Search){
            this.setState({results: this.updateNominatedResults(movies.data.Search), searching: false})
          }
        })
        .catch(err => console.log(`Unable to fetch movies: ${err}`))
      }
    }
  }
  
  render() {
    return (
      <div className="app">
        <Jumbo />
        <div className="container app-container">
          <div className="row">
          <div className="col-md-5 movie-search">
        {this.state.nominations.length !== 5 
          ? <Search searchHandler={this.handleSearch}/>
          : <p nominees={this.state.nominations}/>
        }
        </div>
       </div>
       <div className="row">
       <div className="col-md-6">
          <Results 
            results={this.state.results}
            nominationHandler={this.addNomination} 
            complete={this.state.nominations.length === 5 ? true : false}
            searchInProgress={this.state.search ? true : false}
          />
          </div>
          <div className="col-md-6">
          <Nominated 
            nominations={this.state.nominations}
            nominationHandler={this.removeNomination}
            added={this.state.added}
          />
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
