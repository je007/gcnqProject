import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class EditComponent extends Component {
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

        axios.put(`http://localhost:5000/editPost/${this.props.post.id}`, {
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
            <div key={this.props.post.id} className="post">
                <form className="form" onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.getTitle = input}
                        defaultValue={this.props.post.post_title} placeholder="Enter Recipe Title" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getIngredients = input}
                        defaultValue={this.props.post.post_ingredients} cols="28" placeholder="Enter Ingredients" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getSteps = input}
                        defaultValue={this.props.post.post_steps} cols="28" placeholder="Enter Steps" /><br /><br />
                    <button>Update </button>
                </form>
            </div>
        );
    }
}
export default connect()(EditComponent);
