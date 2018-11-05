import React, { Component } from 'react';
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
        <img className="pie" src="https://media.giphy.com/media/2ykpw7bOysvGo/giphy.gif" height="285" width="385"/>
      </div>
    );
  }
}
export default App;