import React from 'react';
import css from './css/NavBarForm.module.css';

class NavBarForm extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    

    // handleClick = () => {
    //     this.setState((prevState)=>{
    //         console.log("Button clicekd")
    //         return(
    //             {isLoggedIn: prevState.isLoggedIn = false }
    //         )
    //     }
    // )
    // }


    handleButtonClick = () => {
        this.setState((prevState) => ({
            isLoggedIn: prevState.isLoggedIn ? false: true
        }),  () => console.log(this.state.isLoggedIn))
    }
    
    render(){
        return(
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                { this.state.isLoggedIn ? (
                   <form>
                   <label htmlFor = "username">Username:</label>
                   <input placeholder="username" id="username"/>
                   
                   <label htmlFor = "password">Password:</label>
                   <input placeholder="password" id="password"/>
                   <button onClick={this.handleButtonClick}>
                    submit
                        </button>
               </form>
                        
                       
                    
                    
                    
                ) : (<button onClick={this.handleButtonClick}>
                    Log in
                        </button>)}
                
                    
            </div>
        )
    }
    
}

export default NavBarForm;