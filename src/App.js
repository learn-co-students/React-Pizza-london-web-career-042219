import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pizzas: [],
      selectedPizza: {}
    };
  }

  componentDidMount() {
    this.fetchPizzasFromServer();
  }

  fetchPizzasFromServer = () => {
    fetch("http://localhost:3000/pizzas")
      .then(response => response.json())
      .then(data =>
        this.setState({
          pizzas: data
        })
      );
  };

  handleClick = pizza => {
    this.setState({
      selectedPizza: pizza
    });
  };

  submitPizza = e => {
    console.log(e);
  };
  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          pizza={this.state.selectedPizza}
          submitPizza={this.submitPizza}
        />
        <PizzaList pizzas={this.state.pizzas} handleClick={this.handleClick} />
      </Fragment>
    );
  }
}

export default App;
