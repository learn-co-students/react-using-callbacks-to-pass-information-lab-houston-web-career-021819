import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      color: null
    }
  }

  selectColor = (hexString) =>{
    this.setState({
      color: hexString
    })
  }

  //this method only needs to give cell access to this.state.color
  changeColor = () => {
    return this.state.color
  }

  //this.changeColor(): to get the result of the function changeColor, 
  //this.changeColor: to get a callback function.
  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} changeColor={this.changeColor()}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector selectColor = {this.selectColor}/>
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
