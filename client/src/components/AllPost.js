import React, { Component } from 'react';
import { connect } from 'react-redux';
import IndividualPost from './IndividualPost';
import Post from './Post';
import EditComponent from './EditComponent';
import axios from 'axios';

class AllPost extends Component {
    componentDidMount = () => {
        axios.get('/all').then(res => this.props.dispatch({type:'LOAD_POSTS', data:res.data}));
    }

    render() {
        return (
            <div>
                <h1 className="post_heading">All Recipes</h1>
                {this.props.posts.map((post) => (
                    <div className="post_container" key={post.id}>
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
