import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  state = {
    selectedColor: "F00"
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} checkColor={this.checkColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  setColor = (val) => {
    this.setState({
      selectedColor: val
    })
  }

  checkColor = () => {
    console.log(this.state.selectedColor)
    return this.state.selectedColor
  }

  render() {
    return (
      <div id="app">
        <ColorSelector setColor={this.setColor}/>
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
