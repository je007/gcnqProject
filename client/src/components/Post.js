import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Post extends Component {
  handleChange = () => {
    axios.delete(`http://localhost:5000/editPost/${this.props.post.id}/delete`)
      .then(res => {
        this.props.dispatch({
            type: 'DELETE_POST',
            data: res.data
        });
        window.location = '/';
    });
  }

    render() {
      const ingredientString = this.props.post.post_ingredients;
      const ingredientSplit = ingredientString.split(', ');
      const ingredientList = ingredientSplit.map((ingredient) =>
        <li>{ingredient}</li>
      );

      const stepString = this.props.post.post_steps;
      const stepSplit = stepString.split(', ');
      const stepList = stepSplit.map((step) =>
        <li>{step}</li>
      );

        return (
            <div key={this.props.post.id} className="post">
                <Link to={"/post/" + this.props.post.id}><h2 className="post_title">{this.props.post.post_title}</h2></Link>
                <h3 className="post_author">By: {this.props.post.author.realName}</h3>
            </div>
        );
    }
}
export default connect()(Post);
