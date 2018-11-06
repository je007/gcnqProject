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

            <div className="form_container" key={this.state.post.id} >
                <form className="form" onSubmit={this.handleEdit} >
                    <img src="https://www.selekt.in/static/selekt/pics/typing4.gif?v=cae3c90a" height="50" width="90" className="title"/>
                    <input required type="text" ref={(input) => this.getTitle = input}
                        defaultValue={this.state.post.post_title} placeholder="Recipe Title" />
                    <img src="http://www.brodericksbrothers.com/wp-content/themes/brodericks_theme/img/factory/ingredients.gif" height="50" width="45" className="ingredients"/>
                    <textarea required rows="5" ref={(input) => this.getIngredients = input}
                        defaultValue={this.state.post.post_ingredients} cols="28" placeholder="Comma Separated Ingredients" />
                    <img src="https://66.media.tumblr.com/ed35624792967d90766ac4178ccd9c5f/tumblr_inline_mu0dumfcmS1rg56wj.gif" height="50" width="200" className="steps"/>
                    <textarea required rows="5" ref={(input) => this.getSteps = input}
                        defaultValue={this.state.post.post_steps} cols="28" placeholder="Comma Separated Steps" />
                    <button>Update</button>
                </form>
              </div>

        );
    }
}
export default connect()(EditComponent);
