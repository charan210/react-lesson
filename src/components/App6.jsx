import React from 'react'
import "./App6.css";
import Fruit from './Fruit'

export default function App6() {
  return (
    <div>
        
        <h1 style={{color:'#1278a49c'}}>This is App6 Component</h1>
        <div className="Box">
      <div className="container">
        <Fruit name="Apple" />
        <Fruit name="Mango" />
        <Fruit name="Orange" />
        <Fruit name="Banana" />
      </div>
    </div>
    </div>
  )
}
