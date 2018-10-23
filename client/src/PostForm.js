import React, { Component } from 'react';

class PostForm extends Component {
    render() {
        return(
            <div>
                <h1>Create Post</h1>
                <form>
                    <input required type='text' placeholder="Recipe Title"/><br /><br />
                    <textarea required placeholder='List of Ingredients'/><br /><br />
                    <textarea required placeholder='Directions'/><br /><br />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}
export default PostForm;