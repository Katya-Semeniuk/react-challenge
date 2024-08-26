import React from 'react';

class Greeting extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          introduction: "Hello",
          buttonText : "Exit",
          count: 0,
        };
    }
    
    handleClick(){
        this.setState((prevState, prevProps) => {
            console.log("prevState", prevState)
            console.log("prevProps", prevProps)
            return(
                {
                    introduction: prevState.introduction === "Hello" ? "Goodbye": "Hello",
                    buttonText: prevState.buttonText === "Exit" ? "Enter": "Exit",
                }
            )
        })
        
        console.log("clicked")
    }

    increment(){
        this.setState((prevState, prevProps) =>{
            return(
               { count: prevState.count + 1}
            )
        })
    }

    render(){
        return (
            <div>
            <h1>{this.state.introduction}</h1>
            <button onClick={()=> {this.handleClick()}}> {this.state.buttonText}</button>
            <button onClick={()=> {this.increment()}}>{this.state.count}</button>
        </div>
        )
    }

}

export default Greeting;