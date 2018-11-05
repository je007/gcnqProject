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

        axios.post('http://localhost:5000/post', {
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
                    <input required type="text" ref={(input) => this.getTitle = input}
                        placeholder="Recipe Title" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getIngredients = input}
                        cols="28" placeholder="Comma Separated Ingredients" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getSteps = input}
                        cols="28" placeholder="Comma Separated Steps" /><br /><br />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}
export default connect()(PostForm);
