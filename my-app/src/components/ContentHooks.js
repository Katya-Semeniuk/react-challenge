import React, {useState, useEffect} from "react";
import css from './css/Content.module.css';
import Loader from "./Loader";
import PostItem from "./PostItem";
import {savedPosts} from "../posts.json";





function ContentHooks (){
  const [isLoaded, setIsLoaded] = useState(false);
  const [fetchedPosts, setFetchedPosts] = useState([]);
  


  useEffect(()=> {

    setTimeout(()=>{
        setIsLoaded(true)
        setFetchedPosts(savedPosts)
    }, 2000)
  }, [] 
  ) 




    const handleInputChange = (e) =>{
        let name = e.target.value.toLowerCase();
        console.log("handleInputChange", name);

        const filteredPosts = fetchedPosts.filter((post) => {
            return post.name.toLowerCase().includes(name);
        })
        setFetchedPosts(filteredPosts)
    }

  
        return (
            <div className={css.Content}>
                
                 <div className={css.TitleBar}>
                     <h1>My Photos</h1>
                     <form>
                        <label htmlFor="searchInput">Search:</label>
                        <input 
                        onChange={(e) => {handleInputChange(e)}}
                        type="search"
                         id = "searchInput"
                         placeholder="By Author"/>
                        
                       
                     </form>
                     <h4>posts found {fetchedPosts.length}</h4>
                 </div>
                 <div className={css.SearchResults}>
                    {isLoaded ?
                        <PostItem savedPosts={fetchedPosts} />
                        : <Loader />
                    }
                </div>
            </div>
           
        )
}

export default ContentHooks;

