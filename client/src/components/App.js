import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Header from './Header';
import PostForm from './PostForm';
import AllPost from './AllPost';
import IndividualPost from './IndividualPost';


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
          </switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
