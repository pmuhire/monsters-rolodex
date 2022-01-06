import './App.css';
import react from 'react';

import { CardList } from './Components/card-list/card-list.component'

class App extends react.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monster => this.setState({ monsters: monster }))
  }
  render() {
    const {monsters,searchField}=this.state;
    const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase( )))
    return (
      <div className="App">
        <input
          type="search"
          placeholder='search monsters'
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
