import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newIngredients = this.getIngredients.value;
        const newSteps = this.getSteps.value;
        const data = {
            newTitle,
            newIngredients,
            newSteps
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }
    render() {
        return (
            <div key={this.props.post.id} className="post">
                <form className="form" onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.getTitle = input}
                        defaultValue={this.props.post.title} placeholder="Enter Recipe Title" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getIngredients = input}
                        defaultValue={this.props.post.ingredients} cols="28" placeholder="Enter Ingredients" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getSteps = input}
                        defaultValue={this.props.post.steps} cols="28" placeholder="Enter Steps" /><br /><br />
                    <button>Update</button>
                </form>
            </div>
        );
    }
}
export default connect()(EditComponent);