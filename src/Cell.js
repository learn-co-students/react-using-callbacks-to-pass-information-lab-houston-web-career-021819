import React, { Component } from 'react';
import { timingSafeEqual } from 'crypto';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  
  setCellColor = (inputColor) => {
    //console.log('got here')
    this.setState({
      color: inputColor
    })
   // console.log(this.state.color)
   //React dev tools -> you can view the state of an element in the dev tools. We need not log it as we were doing it before
  }


  render() {
    console.log(this.props.selectedColor)

    return (
      <div className="cell" style={{backgroundColor: this.state.color}}  onClick={(e)=>this.setCellColor(this.props.selectedColor)}>
      </div>
    )
  }
  
}
