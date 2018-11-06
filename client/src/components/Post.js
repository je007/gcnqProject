import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Post extends Component {

    render() {
      return (
            <div key={this.props.post.id} className="post">
                <Link to={"/post/" + this.props.post.id}><h2 className="post_title">{this.props.post.post_title}</h2></Link>
                <h3 className="post_author">By: {this.props.post.author.realName}</h3>
            </div>
      );
    }
}
export default connect()(Post);
