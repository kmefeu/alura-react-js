import React, { Component } from "react";
import "./CategoryList.css";
class CategoryList extends Component {
  _handleInputEvent(eve) {
    if (eve.key === "Enter") {
      this.props.addCategory(eve.target.value);
    }
  }

  render() {
    return (
      <section className="categoryList">
        <ul className="ulCategoryList">
          {this.props.category.map((category, index) => {
            return (
              <li className="liCategoryList" key={index}>
                {category}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="inputCategoryList"
          onKeyUp={this._handleInputEvent.bind(this)}
        />
      </section>
    );
  }
}

export default CategoryList;
