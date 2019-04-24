import React, { Component } from 'react';

export default class ColorSelector extends Component {

  constructor(props) {
    super(props)
    this.setColor = this.props.setColor
  }

  handleClick = (e) => {
    e.persist()
    this.setColor(e.target.style["background-color"])
  }

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}} onClick={this.handleClick}/>
    })
  )

  //(idx) => {this.setColor(idx)}

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
