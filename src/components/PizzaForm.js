import React, { Component } from "react";

class PizzaForm extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
  }
  clicked = () => {
    this.setState({
      checked: !this.state.checked
    });
  };
  render() {
    return (
      <div className="form-row">
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Pizza Topping"
            defaultValue={this.props.pizza.topping}
          />
        </div>
        <div className="col">
          <select defaultValue={this.props.pizza.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              onClick={this.clicked}
              className="form-check-input"
              type="radio"
              value="Vegetarian"
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              onClick={this.clicked}
              className="form-check-input"
              type="radio"
              value="Not Vegetarian"
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button
            type="submit"
            className="btn btn-success"
            onClick={this.props.submitPizza()}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default PizzaForm;
