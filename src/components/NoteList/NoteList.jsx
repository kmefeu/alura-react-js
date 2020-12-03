import React, { Component } from "react";
import Card from "../Card";
import "./NoteList.css";

export default class NoteList extends Component {

  constructor(){
    super()
    this.state = {notes:[]}
    this._newNotes = this._newNotes.bind(this)
  }

  componentDidMount(){
    this.props.notes.subscribe(this._newNotes)
  }

  componentWillUnmount(){
    this.props.notes.unsubscribe(this._newNotes)
  }

  _newNotes(notes){
  this.setState({...this.state,notes})  
    
  }
  render() {
    return (
      <ul className="NoteList">
        {this.state.notes.map((note, index) => {
          return (
            <li className="NoteListItem" key={index}>
              <Card
                index={index}
                deleteNote={this.props.deleteNote}
                title={note.title}
                text={note.text}
                category={note.category}
                
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
