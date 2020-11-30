import React, { Component } from "react"
import NoteList from "./components/NoteList"
import DefaultForm from "./components/DefaultForm"
import "./assets/App.css"

class App extends Component {

  constructor() {
    super();
    this.notes = [];
    this.state = {
      notes: []
    };
  }

  createNote(title, text) {
    const newNote = { title, text }
    const newArray = [...this.state.notes, newNote]
    const newState = {
      notes: newArray
    }
    this.setState(newState)

  }

  render() {
    return (
      <section className="Content">
        <DefaultForm createNote={this.createNote.bind(this)} />
        <NoteList notes={this.state.notes} />
      </section>
    )
  }

}

export default App;
