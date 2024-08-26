import React from "react";
import axios from 'axios';

export class HTTPRequest extends React.Component{
    constructor(props){
        super(props)
        this.state={
            posts: [],
            error: null
        }
    }
componentDidMount(){
axios.get('https://jsonplaceholder.typicode.com/posts')
.then(response =>{
    this.setState({
        posts: Array.isArray(response.data)
        ? response.data
        : [response.data] 
    })
})
.catch(error =>{
console.log(error)
this.setState({
    error: error.message
})
})
}
    render(){
        const posts = this.state.posts;
        return (
            <div>
                <h2>Posts:</h2>
                {posts.length ? (
                    posts.map(post => (<div key={post.id}>
                        <h3>{post.id} {post.title}</h3>
                        <p>{post.body}</p>
                        <hr/>
                    </div>)
                        
                    )
                ) : (
                    this.state.error
                    ? <p>{this.state.error}</p>
                    : <p>Loading posts</p>
                )}
                
            </div>
        )
    }
}

export default HTTPRequest;