import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
class App extends Component {
  state = {
    pizzas: [],
    formTopping: "",
    formSize: "",
    formVegetarian: false,
    formId: -1
  };

  URL = "http://localhost:4000/pizzas";

  componentDidMount() {
    this.fetchPizzas();
  }

  fetchPizzas = () => {
    fetch(this.URL)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          pizzas: data,
          formTopping: "",
          formSize: "",
          formVegetarian: false,
          formId: -1
        })
      );
  };

  handleChange = event => {
    let { name, value } = event.target;
    name === "formVegetarian" ? (value = value === "true") : null;
    this.setState({ [name]: value });
  };

  createUpdatePizza = (event, formId) => {
    event.preventDefault();

    const pizza = {
      topping: this.state.formTopping,
      size: this.state.formSize,
      vegetarian: this.state.formVegetarian
    };

    if (pizza.topping === "" || pizza.size === "") {
      return;
    } else if (formId === -1) {
      const options = {
        method: "POST",
        body: JSON.stringify(pizza),
        headers: { "Content-Type": "application/json" }
      };
      fetch(this.URL, options).then(() => this.fetchPizzas());
    } else {
      const options = {
        method: "PUT",
        body: JSON.stringify(pizza),
        headers: { "Content-Type": "application/json" }
      };
      fetch(`${this.URL}/${formId}`, options).then(() => this.fetchPizzas());
    }
  };

  editPizza = pizza => {
    const { topping, size, vegetarian, id } = pizza;

    this.setState({
      formTopping: topping,
      formSize: size,
      formVegetarian: vegetarian,
      formId: id
    });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          formTopping={this.state.formTopping}
          formSize={this.state.formSize}
          formVegetarian={this.state.formVegetarian}
          formId={this.state.formId}
          handleChange={this.handleChange}
          submitPizza={this.createUpdatePizza}
        />
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza} />
      </Fragment>
    );
  }
}

export default App;
