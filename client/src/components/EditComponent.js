import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditComponent extends Component {
  state = {
    post: {
      post_title: "",
      post_ingredients: "",
      post_steps: "",
      author: {}
    }
  }
  componentDidMount = () => {
    axios.get(`/editPost/${this.props.match.params.id}`)
      .then(res => {
        this.setState({post:res.data});
    });
  }

    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newIngredients = this.getIngredients.value;
        const newSteps = this.getSteps.value;
        const data = {
            newTitle,
            newIngredients,
            newSteps,
            editing: true
        }

        axios.put(`/editPost/${this.state.post.id}`, {
            postTitle: newTitle,
            postIngredients: newIngredients,
            postSteps: newSteps
        }).then(res => {
            this.props.dispatch({
                type: 'UPDATE',
                data: res.data
            });
            window.location = '/';
        });

        this.getTitle.value = '';
        this.getIngredients.value = '';
        this.getSteps.value = '';
    }

    render() {
        return (
            <div key={this.state.post.id} className="post">
                <form className="form" onSubmit={this.handleEdit} >
                    <input required type="text" ref={(input) => this.getTitle = input}
                        defaultValue={this.state.post.post_title} placeholder="Recipe Title" className="title" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getIngredients = input}
                        defaultValue={this.state.post.post_ingredients} cols="28" placeholder="Comma Separated Ingredients" className="ingredients"/><br /><br />
                    <textarea required rows="5" ref={(input) => this.getSteps = input}
                        defaultValue={this.state.post.post_steps} cols="28" placeholder="Comma Separated Steps" className="steps" /><br /><br />
                    <button>Update</button>
                </form>
            </div>
        );
    }
}
export default connect()(EditComponent);
