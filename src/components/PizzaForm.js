import React from "react";

const PizzaForm = props => {
  const { topping, size, vegetarian } = props.pizza;
  const trueValue = true;

  return (
    <div className="form-row">
      <div className="col-5">
        <input
          type="text"
          name="topping"
          className="form-control"
          placeholder="Pizza Topping"
          onChange={props.updatePizzaData}
          value={
            //Pizza Topping Should Go Here
            topping
          }
        />
      </div>
      <div className="col">
        <select
          value={size}
          name="size"
          className="form-control"
          onChange={props.updatePizzaData}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            name="vegetarian"
            value={trueValue}
            checked={vegetarian ? trueValue : !trueValue }
            onChange={props.updatePizzaData}
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            name="vegetarian"
            value={!trueValue}
            checked={vegetarian ? !trueValue : trueValue }
            onChange={props.updatePizzaData}
          />
          <label className="form-check-label">Not Vegetarian</label>
        </div>
      </div>
      <div className="col">
        <button
          type="submit"
          className="btn btn-success"
          onClick={props.submitPizza}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PizzaForm;
