import React, { Component } from "react"
import NoteList from "./components/NoteList"
import DefaultForm from "./components/DefaultForm"
import CategoryList from "./components/CategoryList"
import "./assets/App.css"
import "./assets/index.css"
import Categories from "./data/category"
import Notes from "./data/notes"


class App extends Component {

  constructor() {
    super();

    this.categories = new Categories()
    this.notes = new Notes()

  }

  render() {
    return (
      <section className="Content">

        <DefaultForm
          categories={this.categories}
          addNote={this.notes.addNote.bind(this.notes)}
        />

        <main className="main-content">

          <CategoryList
            addCategory={this.categories.addCategory.bind(this.categories)}
            categories={this.categories} />

          <NoteList
            deleteNote={this.notes.deleteNote.bind(this.notes)}
            notes={this.notes} />

        </main>

      </section>
    )
  }

}

export default App;
