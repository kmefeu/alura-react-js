import React, { Component } from "react";
import "./Card.css"
export default class Card extends Component {
  render() {
    return (
      <section className="Card">
        <header className="CardHeader">
    <h3 className=".CardTitle">{this.props.title}</h3>
        </header>
    <p className="CardText">{this.props.text}</p>
      </section>
    );
  }
}
