import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
class App extends Component {
  state = {
    pizzas: [],
    selectedPizza: { id: "", topping: "", size: "", vegetarian: true }
  };

  fetchPizzas = () => {
    fetch("http://localhost:3000/pizzas")
      .then(response => response.json())
      .then(data =>
        this.setState({
          pizzas: data
        })
      );
  };

  componentDidMount() {
    this.fetchPizzas();
  }

  updatePizza = e => {
    // debugger;
    console.log(e.target);
  };

  selectPizza = e => {
    let pizzaId = e.target.value;
    let foundPizza = this.state.pizzas.find(function(pizza) {
      return pizza.id === Number(pizzaId);
    });
    this.setState({
      selectedPizza: foundPizza
    });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          selectedPizza={this.state.selectedPizza}
          updatePizza={this.updatePizza}
        />
        <PizzaList pizzas={this.state.pizzas} selectPizza={this.selectPizza} />
      </Fragment>
    );
  }
}

export default App;
