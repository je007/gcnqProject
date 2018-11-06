import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class IndividualPost extends Component {
  state = {
    post: {
      post_ingredients: "",
      post_steps: "",
      id: "",
      author: {}
    }
  }

  componentDidMount = () => {
    axios.get(`/editPost/${this.props.match.params.id}`)
      .then(res => {
        this.setState({post:res.data});
    });
  }

  handleChange = () => {
    axios.delete(`/editPost/${this.state.post.id}/delete`)
      .then(res => {
        this.props.dispatch({
            type: 'DELETE_POST',
            data: res.data
        });
        window.location = '/';
    });
  }
    render() {
      const ingredientString = this.state.post.post_ingredients;
      const ingredientSplit = ingredientString.split(', ');
      const ingredientList = ingredientSplit.map((ingredient) =>
        <li>{ingredient}</li>
      );

      const stepString = this.state.post.post_steps;
      const stepSplit = stepString.split(', ');
      const stepList = stepSplit.map((step) =>
        <li>{step}</li>
      );

        return (
            <div className="individual_post_container">
            <div key={this.state.post.id} className="individual_post">
                <h2 className="individual_post_title">{this.state.post.post_title}</h2>
                <h3 className="individual_post_author">By: {this.state.post.author.realName}</h3>
                <h3 className="individual_post_ingredients">Ingredients:</h3>
                <p className="individual_post_ingredients" >{ingredientList}</p>
                <h3 className="indpost_steps">Directions:</h3>
                <p className="individual_post_steps">{stepList}</p>
                <div className="control-buttons">
                <button className="edit"
                    onClick={() =>
                      {axios.get(`/editPost/${this.props.match.params.id}`)
                        .then(res => {
                          this.props.dispatch({
                              type: 'EDIT_POST',
                              data: res.data
                          });
                            window.location =`/edit/post/${this.state.post.id}`;
                          });
                        }
                      }
                    >Edit</button>
                    <button className="delete"
                        onClick={() => this.handleChange(this.state.post.id)}
                    >Delete</button>
                </div>
            </div>
            </div>
        );
    }
}

export default connect()(IndividualPost);
