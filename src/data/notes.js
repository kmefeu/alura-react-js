export default class Notes {

    constructor() {
        this.notes = []
        this._sub = []
    }

    addNote(title, text, category) {
        const newNote = new Note(title, text, category)
        this.notes.push(newNote)
        this.notify();
    }

    deleteNote(index) {
        this.notes.splice(index, 1);
        this.notify();
    }
    subscribe(f) {

        this._sub.push(f)

    }
    unsubscribe(f) {
        this._sub = this._sub.filter(fx => fx !== f)
    }
    notify() {
        this._sub.forEach(f => {
            f(this.notes)
        })
    }

}

class Note {
    constructor(title, text, category) {
        this.title = title
        this.text = text
        this.category = category
    }
}