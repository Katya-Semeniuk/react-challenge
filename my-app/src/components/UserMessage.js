import React from 'react';



function UserMessage(props) {
    return(
        <div>
            {props.isLoggedIn ? (<div>
            <ol>
                <li>Confirm your email</li>
                <li>Complete your profile</li>
            </ol>
            <button onClick={props.handleSingOut}>Sign Out</button>
        </div>) : (
            
            <div>
                 <p>Please Sing in</p>
                 <button onClick={props.handleSingIn}>Sign In</button>
            </div>
           
            )}
        </div>
        
        
    )
}

export default UserMessage;