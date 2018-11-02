import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class EditComponent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.onChangeTitle = this.onChangeTitle.bind(this);
  //   this.onChangeIngredients = this.onChangeIngredients.bind(this);
  //   this.onChangeSteps = this.onChangeSteps.bind(this);
  //
  //   this.state = {title: '', ingredients: '', steps: ''};
  // }
  //
  // componentDidMount() {
  //   axios.get('http://localhost:5000/editPost/:id')
  //     .then(response => {
  //       this.setState({ title: response.data.title, ingredients: response.data.ingredients, steps: response.data.steps });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // }
  //
  // onChangeTitle(e) {
  //   this.setState({
  //     title: e.target.value
  //   });
  // }
  // onChangeIngredients(e) {
  //   this.setState({
  //     ingredients: e.target.value
  //   });
  // }
  // onChangeSteps(e) {
  //   this.setState({
  //     steps: e.target.value
  //   });
  // }
  // onSubmit(e) {
  //   e.preventDefault();
  //   const serverport = {
  //     title: this.state.title,
  //     ingredients: this.state.ingredients,
  //     steps: this.state.steps
  //   }
  //   axios.post('http://localhost:5000/edit/:id', serverport)
  //   .then(res => console.log(res.data));
  //   this.setState({
  //     title: '',
  //     ingredients: '',
  //     steps: ''
  //   })
  //
  // }
    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newIngredients = this.getIngredients.value;
        const newSteps = this.getSteps.value;
        const data = {
            newTitle,
            newIngredients,
            newSteps,
            editing: true
        }

        axios.put(`http://localhost:5000/editPost/${this.props.post.id}`, {
            postTitle: newTitle,
            postIngredients: newIngredients,
            postSteps: newSteps
        }).then(res => {
            this.props.dispatch({
                type: 'UPDATE',
                data: res.data
            });
            window.location = '/';
        });

        this.getTitle.value = '';
        this.getIngredients.value = '';
        this.getSteps.value = '';
    }

        //this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })

    render() {
        return (
            <div key={this.props.post.id} className="post">
                <form className="form" onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.getTitle = input}
                        defaultValue={this.props.post.post_title} placeholder="Enter Recipe Title" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getIngredients = input}
                        defaultValue={this.props.post.post_ingredients} cols="28" placeholder="Enter Ingredients" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getSteps = input}
                        defaultValue={this.props.post.post_steps} cols="28" placeholder="Enter Steps" /><br /><br />
                    <button>Update </button>
                </form>
            </div>
        );
    }
}
export default connect()(EditComponent);
