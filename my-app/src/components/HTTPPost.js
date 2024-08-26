import React from "react";
import axios from 'axios';

export class HTTPPost extends React.Component{
    constructor(props){
        super(props)
        this.state={
            apiResponse: null,
         
        }
    }

    postToAPI = () =>{
       axios.post('https://jsonplaceholder.typicode.com/posts', 
        {   title: 'Hello world!',
            body: 'It works!',
            userId: 123,
        }
      )
      .then(response => {
        console.log(response.data)
        this.setState({
            apiResponse:response.data
        })
      })
    }


render(){
    const {apiResponse} = this.state;
    return(
        <div>
            <button onClick={this.postToAPI}> Create Post </button>
        {
            apiResponse
            ? (<div>
                <h1>{apiResponse.title}</h1>
                <p>post id: {apiResponse.id}</p>
                <p>{apiResponse.body}</p>
                <p>user id: {apiResponse.userId}</p>
            </div>)
            : (<p>please click the button above</p>)
        }
        </div>
        
    )
}}


    export default HTTPPost;