import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
    const thisColor = this.props.newColor()
    this.setState({
      color: this.props.thisColor
    })
  }
  
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick = {this.handleClick}>
      </div>
    )
  }
  
}
