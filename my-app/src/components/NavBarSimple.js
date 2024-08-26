import React from "react";

class NavBarSimple extends React.Component{

   
    constructor(props){
        super(props);
        this.state = {
            message: "Hello, guest",
            buttonText: "Log in",
        }
    }

    handleClick(){
      this.setState((prevState) => {

        return(
            {
            message: prevState.message === "Hello, guest" ? "Welcome back, user!" : "Hello, guest",
            buttonText: prevState.buttonText === "Log in" ? "Log out" : "Log in",
        }
        )
      })
    }


   render(){
    return(
        <div>
    <span>{this.state.message}</span> 
    <button onClick={()=> {this.handleClick()}}>{this.state.buttonText}</button>
        </div>
    )
   }
}

export default NavBarSimple;