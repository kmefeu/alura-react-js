import React, { Component } from "react";
import Card from "../Card";
import "./NoteList.css";

export default class NoteList extends Component {


  render() {
    return (
      <ul className="NoteList">
        {this.props.notes.map((note, index) => {
          return (
            <li className="NoteListItem" key={index}>
              <Card title={note.title} text={note.text}/>
            </li>
          );
        })}
      </ul>
    );
  }
}
