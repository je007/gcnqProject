import React, { Component } from 'react';
import { connect } from 'react-redux';
class Post extends Component {
    render() {
        return (
            <div className="post">
                <h2 className="post_title">{this.props.post.post_title}</h2>
                <h3 className="post_author">By {this.props.post.author.realName}</h3>
                <h3 className="post_message">Ingredients:</h3>
                <p className="post_message">{this.props.post.post_text}</p>
                <h3 classname="post_steps">Directions:</h3>
                <p className="post_steps">{this.props.post.steps}</p>
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
