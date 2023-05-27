import React, { Component } from 'react'
import Button from '@mui/material/Button';
import UpdatedComp from './HigherOrder';

export class HoverCount extends Component {
    constructor(props) {
      super(props)
      this.state = {
         hoverCount: 0
      }
    }
    IncrementCount = () => {
        this.setState({ hoverCount: this.state.hoverCount + 1})
    }

  render() {
    const {hoverCount} = this.state;
    return (
      <div className='countme'>
        <Button variant="outlined" onMouseEnter={this.IncrementCount} >
          {this.props.name} Hover {hoverCount} times</Button>
      </div>
    )
  }
}

export default UpdatedComp(HoverCount);