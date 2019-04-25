import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  // constructor() {
  //   super()
  // }
  state = {
    selectedColor: '#FFF'
  }

  hexColor = (color) => (
    this.setState({
      selectedColor: color
    })
  )
  
  currentColor = () => (this.state.selectedColor)


  genRow = (vals) => (
    vals.map((val, idx) => <Cell currentColor={this.currentColor} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    
    return (
      
      <div id="app">
        <ColorSelector hexColor={this.hexColor}/>
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
