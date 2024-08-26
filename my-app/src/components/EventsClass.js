import React, { Component } from 'react'

export class EventsClass extends Component {
constructor(props) {
  super(props)

  this.state = {
    eventText: 0,
  }
}

clickHandler = () => {
        console.log('clickHandler EventsClass Errow Function')
        this.setState((prevState)=>{
            return(
                {
                eventText: prevState.eventText +1
                }
            )
            
        })
    }

  render() {
    return (
      <div onClick={this.clickHandler}>
        <button>EventsClass ckick </button>
        <br/>
        <span>{this.state.eventText}</span>
      </div>
    )
  }
}

export default EventsClass;