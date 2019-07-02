import React from "react"

const Pizza = (props) => {

  const {id, topping, size, vegetarian} = props.pizza;

  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td><button type="button" id={id} className="btn btn-primary" onClick={props.setCurrentPizza}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
