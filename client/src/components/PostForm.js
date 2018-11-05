import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const ingredients = this.getIngredients.value;
        const steps = this.getSteps.value;
        const data = {
            id: new Date(),
            title,
            ingredients,
            steps,
            editing: false
        }

        axios.post('/post', {
            postTitle: title,
            postIngredients: ingredients,
            postSteps: steps
        }).then(res => {
            this.props.dispatch({
                type: 'ADD_POST',
                data: res.data
            });
        });

        this.getTitle.value = '';
        this.getIngredients.value = '';
        this.getSteps.value = '';
    }
    render() {
        return (
            <div className="form_container">
                <h1 className="post_heading">Create Recipe</h1>
                <form className="form" onSubmit={this.handleSubmit} >
                    <img src="https://www.selekt.in/static/selekt/pics/typing4.gif?v=cae3c90a" height="50" width="90" className="title"/>
                    <input required type="text" ref={(input) => this.getTitle = input}
                        placeholder="Recipe Title" className="title" />
                    <img src="http://www.brodericksbrothers.com/wp-content/themes/brodericks_theme/img/factory/ingredients.gif" height="50" width="45" className="ingredients"/>
                    <textarea required rows="5" ref={(input) => this.getIngredients = input}
                        cols="28" placeholder="Comma Separated Ingredients" className="ingredients"/>
                    <img src="https://66.media.tumblr.com/ed35624792967d90766ac4178ccd9c5f/tumblr_inline_mu0dumfcmS1rg56wj.gif" height="50" width="200" className="steps"/>
                    <textarea required rows="5" ref={(input) => this.getSteps = input}
                        cols="28" placeholder="Comma Separated Steps" className="steps" />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}
export default connect()(PostForm);
