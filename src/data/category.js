export default class Categories {

    constructor() {
        this.categories = []
        this._sub = []
    }
    subscribe(f) {

        this._sub.push(f)

    }
    unsubscribe(f) {
        this._sub = this._sub.filter(fx => fx !== f)
    }
    notify() {
        this._sub.forEach(f => {
            f(this.categories)
        })
    }

    addCategory(newCate) {
        this.categories.push(newCate)
        this.notify()
    }
}