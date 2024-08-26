import React from "react";
import css from './css/Content.module.css';
import Loader from "./Loader";
import PostItem from "./PostItem";

const savedPosts = require('../posts.json').savedPosts;



class Content extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            isLoaded: false,
            posts : [],
        }
        
    }



    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isLoaded: true,
                posts: savedPosts,
            })
        }, 2000)
    }

    handleInputChange = (e) =>{
        let name = e.target.value.toLowerCase();
        console.log("handleInputChange", name);

        const filteredPosts = savedPosts.filter((post) => {
            return post.name.toLowerCase().includes(name);
        })
        this.setState({
                posts: filteredPosts,  
            })
    }

    render(){
        return (
            <div className={css.Content}>
                
                 <div className={css.TitleBar}>
                     <h1>My Photos</h1>
                     <form>
                        <label htmlFor="searchInput">Search:</label>
                        <input 
                        onChange={(e) => {this.handleInputChange(e)}}
                        type="search"
                         id = "searchInput"
                         placeholder="By Author"/>
                        
                       
                     </form>
                     <h4>posts found {this.state.posts.length}</h4>
                 </div>
                 <div className={css.SearchResults}>
                    {
                        this.state.isLoaded ?
                        <PostItem savedPosts={this.state.posts} />
                        : <Loader />
                    }
                </div>
            </div>
           
        )
    }
}

export default Content;

