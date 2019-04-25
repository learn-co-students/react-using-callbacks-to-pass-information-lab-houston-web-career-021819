import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  
  //change this cell square color using the color passed from Matrix
  eventHandler = () =>{
   const newColor = this.props.newColor()//get new color by calling props function
   this.setState({color:newColor})
  }
  
  render() {
    return (
      <div onClick = {this.eventHandler} className="cell" style={{backgroundColor: this.state.color}} >
      </div>
    )
  }
  
}
