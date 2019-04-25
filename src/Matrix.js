import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super() 
  } 

  //keep track of colors
  state ={
    color: null
  }


 //update state
  trackColor = (color) => {
    this.setState({
      color:color
    })
  }
  
  getNewColor =()=>{
   return this.state.color
 } 
  

  //rendered Cell
  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} newColor = {this.getNewColor}/>)
   
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

 
  render() {
    return (
      <div id="app">
        <ColorSelector trackColor = {this.trackColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
