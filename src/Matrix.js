import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: null
    }
  }

  changeColor = (value) => {
  
    this.setState({
      selectedColor: value
    })

  }

  currentState = () => {
    return(this.state.selectedColor)
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} newColor={this.currentState}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    console.log(this.state.selectedColor)
    return (
      <div id="app">
        <ColorSelector changeColor = {this.changeColor}/>
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
