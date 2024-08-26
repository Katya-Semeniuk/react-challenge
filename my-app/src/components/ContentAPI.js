import React from "react";
import css from './css/Content.module.css';
import Loader from "./Loader";
import PostItemAPI from "./PostItemAPI";
import axios from 'axios';
import API_KEY from '../secrets';

const savedPosts = require('../posts.json').savedPosts;



class ContentAPI extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            isLoaded: false,
            posts : [],
        }
        
    }


    componentDidMount() {
        this.fetchImages()
    }



    async fetchImages(){
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`)
        console.log(response)
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
                        <PostItemAPI savedPosts={this.state.posts} />
                        : <Loader />
                    }
                </div>
            </div>
           
        )
    }
}

export default ContentAPI;

