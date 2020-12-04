import React, { Component } from "react";
import "./CategoryList.css";
class CategoryList extends Component {
  constructor() {
    super();
    this.state = { categories: [] };
    this._newCategories = this._newCategories.bind(this);
  }

  componentDidMont() {
    this.props.categories.subscribe(this._newCategories);
  }

  componentWillUnmount() {
    this.props.categories.unsubscribe(this._newCategories);
  }

  _newCategories(categories) {
    this.setState({ ...this.state, categories });
  }

  _handleInputEvent(eve) {
    if (eve.key === "Enter") {
      let categoryValue = eve.target.value;
      this.props.addCategory(categoryValue);
    }
  }

  render() {
    return (
      <section className="categoryList">
      {console.log(this.state.categories)}
        <ul className="ulCategoryList">
          {this.state.categories.map((category, index) => {
            console.log(category);
            return (
              <li key={index} className="liCategoryList">
                {category}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="inputCategoryList"
          placeholder="Add Category"
          onKeyUp={this._handleInputEvent.bind(this)}
        />
      </section>
    );
  }
}

export default CategoryList;
