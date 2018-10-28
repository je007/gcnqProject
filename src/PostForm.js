import React, { Component } from 'react';
import { connect } from 'react-redux';
class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const steps = this.getSteps.value;
        const data = {
            id: new Date(),
            title,
            message,
            steps,
            editing: false
        }
        this.props.dispatch({
            type: 'ADD_POST',
            data
        })
        this.getTitle.value = '';
        this.getMessage.value = '';
        this.getSteps.value = '';
    }
    render() {
        return (
            <div className="post-container">
                <h1 className="post_heading">Create Recpie</h1>
                <form className="form" onSubmit={this.handleSubmit} >
                    <input required type="text" ref={(input) => this.getTitle = input}
                        placeholder="Enter Recipe Title" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getMessage = input}
                        cols="28" placeholder="Enter Ingredients" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getSteps = input}
                        cols="28" placeholder="Enter Steps" /><br /><br />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}
export default connect()(PostForm);