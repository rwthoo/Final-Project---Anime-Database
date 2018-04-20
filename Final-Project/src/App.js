import React, { Component } from 'react';
import { AnimeSearch, AnimeList } from './containers';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pending: false,
      appUsed: false,
      animeFilm: [],
      animespecies: [],
    };
  }

  searchAnimeFilmByTitle(title) {
    const api = 'curl https://ghibliapi.herokuapp.com/films/""';
    const animespecies = this.state.animespecies;


    var animespeciesString=animespecies.join('|');

    this.setState({
      animeFilm: [],
      pending: true,
      appUsed: true,
    });

    fetch(api + title + '&species=' + animespeciesString)
    .then(response => response.json())
    .then(data => {
        this.setState({
          pending: false,
          animeFilm: data.films
        });
      }
    );
  }

  handleAnimeSpeciesChange(e) {
    const currentSpecies = this.state.animespecies;

    if(e.target.checked) {
      const newSpecies = currentSpecies.concat(e.target.value);
      this.setState({animeGenre: newSpecies});
    } else {
      const newSpecies = currentSpecies.filter(species => species!==e.target.value);
      this.setState({animeSpecies: newSpecies});
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App__container">
          <AnimeSearch
            onAnimeSpeciesChange={(e)=> this.handleAnimeSpeciesChange(e)}
            search={(animeTitle) => this.searchAnimeFilmByTitle(animeTitle)}
          />
          <AnimeList
            appUsed={this.state.appUsed}
            pending={this.state.pending}
            animeCards={this.state.animeFilms}
          />
        </div>
      </div>
    );
  }
}

export default App;
