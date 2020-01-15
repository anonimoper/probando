import React from 'react'
import './app.css'

const Card = (props) =>
(
<div className="card" >
  <img className="card-img-top" src="https://raw.githubusercontent.com/anonimoper/react-2kddkx/master/Drawing%20(2).png" alt="card animal" />
  <div className="card-body">    
    <h4 className="card-text text-center"> {props.text}</h4>    
  </div>
</div>
)

export default Card;