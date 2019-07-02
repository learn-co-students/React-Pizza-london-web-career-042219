import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  constructor() {
    super();
    this.state = {pizzas:[],
                pizza:{} }
  }

  componentDidMount() {

    fetch('//localhost:3000/pizzas')
    .then( data => data.json())
    .then( data => {this.setState( { pizzas:data } )} );

  }

  setCurrentPizza = (event) => {
    // Get the selected pizza into state, ready for a change
    let pizzaId = parseInt(event.target.id,10);
    let pizza = this.state.pizzas.find(pizza => pizza.id===pizzaId)
    this.setState( {pizza:pizza} )
  }

  submitPizza = () => {
    // Save the pizza state into the pizzas state
    let pizzas = [...this.state.pizzas]
    let pizzaIndex = this.state.pizzas.findIndex(pizza=>pizza.id===this.state.pizza.id)
    pizzas[pizzaIndex] = this.state.pizza;
    
    // Also save to the backend
    let configObj = {
      method: "PATCH",
      headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
      },
      body: JSON.stringify( this.state.pizza )
      }

      fetch(`//localhost:3000/pizzas/${this.state.pizza.id}`, configObj)
      .then( () => 
        this.setState({pizzas:pizzas, 
              pizza:{id:null,
                    size:"",
                    topping:"",
                    vegetarian:false} }));

  }

  updatePizzaData = (event) => {
    let targetValue=event.target.value;
    let targetName=event.target.name;
    let currentPizza={}
    Object.assign(currentPizza,this.state.pizza);

    if (targetName==='vegetarian') { // Change it to a boolean if it is vegetarian
      targetValue = targetValue==='true' ? true : false
    }

    Object.assign(currentPizza, {[targetName]:targetValue});
    this.setState({pizza: currentPizza} )

  }
  
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.pizza} submitPizza={this.submitPizza} updatePizzaData={this.updatePizzaData}/>
        <PizzaList pizzas={this.state.pizzas} setCurrentPizza={this.setCurrentPizza}/>
      </Fragment>
    );
  }
}

export default App;
