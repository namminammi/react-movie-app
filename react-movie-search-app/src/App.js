import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header';
import SearchMovieName from './SearchMovieName';
import SearchMovieNameResult from './SearchMovieNameResult';
// import ShowActors from './ShowActors';
    
import BigParent from "./SearchMovieNameResult";

class App extends React.Component {

    render() {

        return (

            <div className = "App">
            <Header />  

            <SearchMovieNameResult />           

{/* 
            <SearchMovieNameResult />

           <ShowActors />*/}


            </div>
        );
    }

}


export default App;
