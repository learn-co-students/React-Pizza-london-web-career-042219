import React from "react";

const PizzaForm = props => {
  const {
    formTopping,
    formSize,
    formVegetarian,
    formId,
    handleChange,
    submitPizza
  } = props;

  return (
    <form className="form-row" onSubmit={event => submitPizza(event, formId)}>
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Pizza Topping"
          name="formTopping"
          value={formTopping}
          onChange={handleChange}
        />
      </div>
      <div className="col">
        <select
          value={formSize}
          name="formSize"
          onChange={handleChange}
          className="form-control"
        >
          <option value="">Select a size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="true"
            name="formVegetarian"
            checked={formVegetarian}
            onChange={handleChange}
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="false"
            name="formVegetarian"
            checked={!formVegetarian}
            onChange={handleChange}
          />
          <label className="form-check-label">Not Vegetarian</label>
        </div>
      </div>
      <div className="col">
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </div>
    </form>
  );
};

export default PizzaForm;
