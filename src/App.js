import './App.css';
import react from 'react';

import { CardList } from './Components/card-list/card-list.component'
import {SearchBox} from './Components/search-box/search-box.component'

class App extends react.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    // this.handleChange=this.handleChange.bind(this); this is done to bind this to the context
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monster => this.setState({ monsters: monster }))
  }
  handleChange=(e)=>{
    this.setState({ searchField: e.target.value })
  }
  render() {
    const {monsters,searchField}=this.state;
    const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase( )))
    return (
      <div className="App">
        {/* LIFTING STATE UP  */}
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="Search monsters" handleChange={this.handleChange}></SearchBox>
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
