import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    response: [
      {}
    ]
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };



  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Food Feed</h1>
          <p>

          </p>
          <a>
            {
              this.state.response[0].username
            }
          </a>
        </header>
      </div>
    );
  }
}

export default App;
