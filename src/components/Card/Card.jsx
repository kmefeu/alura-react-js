import React, { Component } from "react";
import "./Card.css";
import { ReactComponent as DeleteSvg } from "../../assets/svg/delete.svg";
export default class Card extends Component {
  indexDeleted() {
    const index = this.props.index;
    this.props.deleteNote(index);
  }

  render() {
    return (
      <section className="Card">
        <header className="CardHeader">
          <h3 className=".CardTitle">{this.props.title}</h3>
          <DeleteSvg onClick={this.indexDeleted.bind(this)} />
        </header>
        <p className="CardText">{this.props.text}</p>
      </section>
    );
  }
}
