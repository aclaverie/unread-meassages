import React, { Component } from 'react';
import Button from '@mui/material/Button';
import UpdatedComp from './HigherOrder';


//practising class components
export class ClickCount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         clickCount: 0
      }
    }

    UpdateClick = () => {
        this.setState({ clickCount: this.state.clickCount + 1})
    }

  render() {
    

    const {clickCount} = this.state;
    return (
      <div className='countme'>
        <Button variant="outlined" onClick={this.UpdateClick} >
        {this.props.name} Clicked {clickCount} time</Button>
      </div>
    )
  }
}

export default UpdatedComp(ClickCount);