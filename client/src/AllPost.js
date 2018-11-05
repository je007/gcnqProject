import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';
import axios from 'axios';

class AllPost extends Component {
    componentDidMount = () => {
        axios.get('http://localhost:5000').then(res => this.props.dispatch({type:'LOAD_POSTS', data:res.data}));
    }

    render() {
        return (
            <div>
                <h1 className="post_heading">All Recipies</h1>
                {this.props.posts.map((post) => (
                    <div key={post.id}>
                        {post.editing ? <EditComponent post={post} key={post.id} /> : <Post post={post}
                            key={post.id} />}
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost);