import React, { Component } from "react";

class Pizza extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.pizza.topping}</td>
        <td>{this.props.pizza.size}</td>
        <td>{this.props.pizza.vegetarian ? "Vegetarian" : "Not Vegetarian"}</td>
        <td>
          <button
            onClick={this.props.selectPizza}
            type="button"
            className="btn btn-primary"
            value={this.props.pizza.id}
          >
            Edit Pizza
          </button>
        </td>
      </tr>
    );
  }
}

export default Pizza;
