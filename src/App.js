import React, { Component } from "react"
import NoteList from "./components/NoteList"
import DefaultForm from "./components/DefaultForm"
import CategoryList from "./components/CategoryList"
import "./assets/App.css"

class App extends Component {

  constructor() {
    super();

    this.state = {
      notes: [],
      category: ["Work", "Game"]
    };
  }

  addNote(title, text, category) {
    const newNote = { title, text, category }
    const newArray = [...this.state.notes, newNote]
    const newState = {
      notes: newArray
    }
    this.setState(newState)

  }

  deleteNote(index) {
    let noteArray = this.state.notes
    noteArray.splice(index, 1)
    this.setState({ notes: noteArray })
    console.log("IHUUUUUUUUUUL")
  }

  addCategory(newCate) {
    const newCateArray = [...this.state.category, newCate]
    const newState = { ...this.state, category: newCateArray }
    this.setState(newState)
  }

  render() {
    return (
      <section className="Content">

        <DefaultForm 
        addNote={this.addNote.bind(this)} 
        category={this.state.category} />

        <main className="main-content">

          <CategoryList
            addCategory={this.addCategory.bind(this)}
            category={this.state.category} />

          <NoteList
            deleteNote={this.deleteNote.bind(this)}
            notes={this.state.notes} />

        </main>

      </section>
    )
  }

}

export default App;
