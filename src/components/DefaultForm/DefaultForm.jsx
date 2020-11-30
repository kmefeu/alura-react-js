import React, { Component } from "react";
import "./DefaultForm.css";

export default class DefaultForm extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
  }

  _handleTitle(eve) {
    eve.stopPropagation();
    this.title = eve.target.value;
  }

  _handleText(eve) {
    eve.stopPropagation();
    this.text = eve.target.value;
  }
  _createNote(eve) {
    eve.preventDefault();
    eve.stopPropagation();
    this.props.createNote(this.title, this.text);
  }

  render() {
    return (
      <form className="Form" onSubmit={this._createNote.bind(this)}>
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
