import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: props.color
    }
  }
  colorCliq=()=>{
    this.setState({color:this.props.currentColor})
  }
  
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.colorCliq}>
      </div>
    )
  }
  
}
