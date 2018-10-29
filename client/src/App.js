import React, { Component } from 'react';
import './App.css';
import PostForm from './PostForm';
import AllPost from './AllPost';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center ">Food Feed!</h2>
        </div>
        <PostForm />
        <AllPost />
        
      </div>
    );
  }
}
export default App;
