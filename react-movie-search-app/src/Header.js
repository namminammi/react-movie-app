import React, {Component} from 'react';
import './App.css';

class Header extends Component{
render() {
	return (
		<div>
		<div className="App-header">
          <h1>Movie Search App</h1>
            <p>(ReactJS version)</p>
        </div>
        <div className="App-intro">
        <ul>
          <li>1. Search a movie from database by putting down a word</li>
         <li>2. Choose an actor associated with the movie by clicking a movie card</li>
          <li>3. See top movies featuring the clicked actor.</li>
        </ul> 
        </div>
        </div>
		);
}

} 

export default Header;
