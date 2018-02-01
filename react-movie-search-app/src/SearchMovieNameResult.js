import React from 'react';
import axios from 'axios';
import './App.css';
// import Header from './Header';
import SearchMovieName from './SearchMovieName';
// import ShowActors from './ShowActors';




class SearchMovieNameResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            actors:[],
            actorsMovie:[]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickActors = this.handleClickActors.bind(this);
        // this.deleteSearchDiv = this.deleteSearchDiv.bind(this);
    }

    handleClick(e) {
    e.preventDefault();
    let movieId =  e.target.getAttribute("data");
    let actorMovieTitle = e.target.getAttribute("alt");
    this.setState({ 
        movieId: movieId,
        actorMovieTitle : actorMovieTitle,
        movie: []
        
    });
    // console.log("movieId from clicked movie : " +  movieId) 
    // console.log("actoMovieTitle from clicked movie is " + actoMovieTitle)

        let requestUrlActors = 'https://api.themoviedb.org/3/movie/'+ movieId + '/credits?api_key=f8c4016803faf5e7f424abe98a04b8d9';
        // console.log ("requestUrlActors is : " + requestUrlActors); 

        axios.get(requestUrlActors).then(actorname => {
            this.setState({ actors: actorname.data.cast })
        });
  }



    handleSubmit(value) {
        let searchInput = value;
        let sortByPop = "&sort_by=popularity.desc";
        let requestUrl = 'https://api.themoviedb.org/3/search/movie?api_key=f8c4016803faf5e7f424abe98a04b8d9&query=' + searchInput + sortByPop;
        // console.log("requestUrl is : " +  requestUrl);                                            

        axios.get(requestUrl).then(response => {
            this.setState({ movie: response.data.results })
        });
    }

    handleClickActors(ev) {
    ev.preventDefault();
    let actorMovieId =  ev.target.getAttribute("data");
    let actorsName =  ev.target.getAttribute("alt");
    this.setState({ 
        actorMovieId: actorMovieId,
        actorsName:actorsName,
        actors:[]
        
    });
    // console.log("actorMovieId from handleClickActors : " +  actorMovieId) 
    // console.log("actorsName from handleClickActors : " +  actorsName) 

        let requestUrlActorsMovie = 'https://api.themoviedb.org/3/discover/movie?api_key=f8c4016803faf5e7f424abe98a04b8d9&with_people='+ actorMovieId + '&sort_by=popularity.desc';
        // console.log ("requestUrlActorsMovie is : " + requestUrlActorsMovie); 

        axios.get(requestUrlActorsMovie).then(clickedActor => {
            this.setState({ actorsMovie: clickedActor.data.results })
        });
  }


         refreshPage() {
            window.location.reload(true);
        }


    render() {

        return (

            <div className = "SearchAndResult">

            <SearchMovieName onSubmit={this.handleSubmit} />

             <div className="selectedMovieTitle">Selected movie title is :  <h3>{this.state.actorMovieTitle}</h3></div>
              <div className="selectedActorTitle">Selected actor is :  <h3>{this.state.actorsName}</h3></div>

              <input className="RefreshButton" value="Start Again" onClick={this.refreshPage} />

           <div className="ActorsMovieResult">
        {this.state.actorsMovie.map(actorsMovie =>
            
            <div className="movieTitle" key ={ actorsMovie.id }  id={actorsMovie.id} value={actorsMovie.id} onClick = {this.handleClickedActors}>
                    <div className="movieCard" >
                    <img className="posterImg"
                    src = { `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${actorsMovie.poster_path}` }
                    alt = { actorsMovie.title }
                     data ={actorsMovie.id} 
                    /> 
                    <div className="searchFilmTitles"
                     data ={actorsMovie.id}> { actorsMovie.title } </div>
                    </div>
                    </div>
            )}
        
        </div>


        <div className="ActorsResult">
        {this.state.actors.map(actors =>
            
            <div className="movieTitle" key ={ actors.id }  id={actors.id} value={actors.id} onClick = {this.handleClickActors}>
                    <div className="movieCard" >
                    <img className="posterImg"
                    src = { `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${actors.profile_path}` }
                    alt = { actors.name }
                     data ={actors.id} 
                    /> 
                    <div className="searchFilmTitles"
                     data ={actors.id}> { actors.name } </div>
                    </div>
                    </div>
            )}
        
        </div>


            <div className="SearchMovieNameResult">         
            {
                this.state.movie.map(movie =>
                    <div className="movieTitle" key ={ movie.id }  id={movie.id} value={movie.title} onClick = {this.handleClick}>
                    <div className="movieCard" >
                    <img className="posterImg"
                    src = { `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}` }
                    alt = { movie.title }
                     
                     data ={movie.id} 
                    /> 
                    <div className="searchFilmTitles"
                     data ={movie.id}> { movie.title } </div>
                    </div>
                    </div>
                )
            } </div>


            </div>
        );
    }

}






export default SearchMovieNameResult;

