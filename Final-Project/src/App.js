import React, { Component } from 'react';
import { AnimeSearch, AnimeList } from './containers';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pending: false,
      appUsed: false,
      animeCards: [],
      animeGenre: [],
    };
  }

  searchAnimeCardByTitle(title) {
    const api = 'https://myanimelist.net/anime.php?q=""';
    const animeGenre = this.state.animeGenre;


    var animeGenreString=animeGenre.join('|');

    this.setState({
      animeCards: [],
      pending: true,
      appUsed: true,
    });

    fetch(api + title + '&genre=' + animeGenreString)
    .then(response => response.json())
    .then(data => {
        this.setState({
          pending: false,
          animeCards: data.cards
        });
      }
    );
  }

  handleAnimeGenreChange(e) {
    const currentGenre = this.state.animeGenre;

    if(e.target.checked) {
      const newGenre = currentGenre.concat(e.target.value);
      this.setState({animeGenre: newGenre});
    } else {
      const newGenre = currentGenre.filter(genre => genre!==e.target.value);
      this.setState({animeGenre: newGenre});
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App__container">
          <AnimeSearch
            onAnimeGenreChange={(e)=> this.handleAnimeGenreChange(e)}
            search={(animeTitle) => this.searchAnimeCardByTitle(animeTitle)}
          />
          <AnimeList
            appUsed={this.state.appUsed}
            pending={this.state.pending}
            animeCards={this.state.animeCards}
          />
        </div>
      </div>
    );
  }
}

export default App;
