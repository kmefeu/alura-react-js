import React, { Component } from "react";
import "./DefaultForm.css";

export default class DefaultForm extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
    this.category = "";
    this.state = { categories: [] };
    this._newCategories = this._newCategories.bind(this)
  }
  componentDidMount() {
    this.props.categories.subscribe(this._newCategories);
  }

  componentWillUnmount() {
    this.props.categories.unsubscribe(this._newCategories);
  }
  _newCategories(categories) {
    this.setState({ ...this.state, categories });
  }
  _handleCategory(eve) {
    eve.stopPropagation();
    this.category = eve.target.value;
  }
  _handleTitle(eve) {
    eve.stopPropagation();
    this.title = eve.target.value;
  }

  _handleText(eve) {
    eve.stopPropagation();
    this.text = eve.target.value;
  }
  _addNote(eve) {
    eve.preventDefault();
    eve.stopPropagation();
    this.props.addNote(this.title, this.text, this.category);
  }
 

  render() {
    return (
      <form className="Form" onSubmit={this._addNote.bind(this)}>
        <select
          onChange={this._handleCategory.bind(this)}
          className="FormInput"
        >
          <option defaultChecked={true}>Without category</option>

          {this.state.categories.map((category, index) => {
            return <option key={index}>{category}</option>;
          })}
        </select>

        <input
          type="text"
          placeholder="Title"
          className="FormInput"
          onChange={this._handleTitle.bind(this)}
        />

        <textarea
          placeholder="write your note"
          className="FormInput"
          onChange={this._handleText.bind(this)}
        />

        <button className="FormSubmit">Add</button>
      </form>
    );
  }
}
