import React, { Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  componentDidMount() {
    fetch("http://localhost:3000/books", {
      "Content-Type": "application/json"
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
