import React ,{Component} from 'react';

import {CardList} from './component/card-list/card-list';

import {SearchBox} from './component/search-box/search-box.component';

import './App.css';


class App extends Component{
  constructor(){
    super();
    
      this.state ={
        movies:[],
        searchField :''
      };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({movies:users}));
  }

  handlechange = e =>{
    this.setState({searchField: e.target.value});
  };

render(){
  const { movies, searchField}= this.state;
  const filteredMovies = movies.filter(movies =>
     movies.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
  return(
    <div className="App">
      <h1> Movies Rodolex</h1>
       <SearchBox
        placeholder='search movies'
        handlechange={this.handlechange}
       /> 
      <CardList movies={filteredMovies}/>
    </div>
  )
}
}

export default App;
