import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Header from './Header';
import PostForm from './PostForm';
import AllPost from './AllPost';
import IndividualPost from './IndividualPost';
import EditComponent from './EditComponent';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <switch>
            <Route path="/" exact render={props =>
              <div>
                <PostForm />
                <AllPost />
              </div>
            } />
            <Route path="/post/:id" exact component={IndividualPost} />
            <Route path="/edit/post/:id" exact component={EditComponent} />
          </switch>
          <img className="pie" src="https://media.giphy.com/media/2ykpw7bOysvGo/giphy.gif" height="74" width="100"/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
