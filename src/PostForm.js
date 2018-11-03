import React, { Component } from 'react';
import { connect } from 'react-redux';
class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const ingredients = this.getIngredients.value;
        const steps = this.getSteps.value;
        const data = {
            id: new Date(),
            title,
            ingredients,
            steps,
            editing: false
        }
        this.props.dispatch({
            type: 'ADD_POST',
            data
        })
        this.getTitle.value = '';
        this.getIngredients.value = '';
        this.getSteps.value = '';
    }
    render() {
        return (
            <div className="post-container">
                <h1 className="post_heading">Create Recpie</h1>
                <form className="form" onSubmit={this.handleSubmit} >
                <img src="https://www.selekt.in/static/selekt/pics/typing4.gif?v=cae3c90a" height="88" width="146"/> 
                    <input required type="text" ref={(input) => this.getTitle = input}
                        placeholder="Enter Recipe Title" /><br /><br />
                    <img src="http://www.brodericksbrothers.com/wp-content/themes/brodericks_theme/img/factory/ingredients.gif" height="154.5" width="141.5"/>
                    <textarea required rows="5" ref={(input) => this.getIngredients = input}
                        cols="28" placeholder="Enter Ingredients" /><br /><br />
                    <img src="https://66.media.tumblr.com/ed35624792967d90766ac4178ccd9c5f/tumblr_inline_mu0dumfcmS1rg56wj.gif" height="57" width="220"/>
                    <textarea required rows="5" ref={(input) => this.getSteps = input}
                        cols="28" placeholder="Enter Steps" /><br /><br />
                    <button>Create Recipe Card</button>
                </form>
            </div>
        );
    }
}
export default connect()(PostForm);