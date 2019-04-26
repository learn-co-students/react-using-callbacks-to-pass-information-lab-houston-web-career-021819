import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    
    this.state = {
      currentColor: ''
    }
  }

  setColor = (str) => {
    //console.log('got here')
    this.setState({
      currentColor: str
    })
     console.log(str)
    // console.log(this.state.currentcolor)
    //React dev tools will do that for us . You can view the state and props of elements there
  }

  selectedColor = () => { 
    return this.state.currentColor
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.selectedColor()}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


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
