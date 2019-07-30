import React, { Component } from "react";

export class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();

    // create constant to hold the paylod fo the post request
    const post = {
        title: this.state.title,
        body: this.state.body
    }

    // call post method
    fetch('')


  }

  render() {
    return (
      <div>
        <h1>Add post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea name="body" onChange={this.onChange} value={this.state.body} />
          </div>
          <br />
          <button type="default">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
