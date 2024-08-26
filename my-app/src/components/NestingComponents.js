import React, { Component } from 'react';
import UserMessage from './UserMessage';
import UserData from './UserData';

export class NestingComponents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedIn: false,
      }
    }

  handleSingIn = () => {
    this.setState((prevState) => {
      return (
        {isLoggedIn: prevState.isLoggedIn = true}
      )
    })
  }

  handleSingOut = () => {
    this.setState((prevState) => {
      return (
        {isLoggedIn: prevState.isLoggedIn = false}
      )
    })
  }

  render() {
    return (
      <div>
       <UserData isLoaded={this.state.isLoaded}/>
        <UserMessage 
        isLoggedIn={this.state.isLoggedIn}
        handleSingIn={this.handleSingIn} 
        handleSingOut={this.handleSingOut}/>
        
      </div>
    )
  }
}

export default NestingComponents;