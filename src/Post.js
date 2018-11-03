import React, { Component } from 'react';
import { connect } from 'react-redux';
class Post extends Component {
    render() {
        return (
            <div className="post">
                <h2 className="post_title">{this.props.post.title}</h2>
                <p className="post_ingredients">{this.props.post.postIngredients}</p>
                <p className="post_steps">{this.props.post.postSteps}</p>
                <div className="control-buttons">
                    <button className="edit"
                        onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })
                        }
                    >Edit</button>
                    <button className="delete"
                        onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}
                    >Delete</button>
                </div>
            </div>
        );
    }
}
export default connect()(Post);