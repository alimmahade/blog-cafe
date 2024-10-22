import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = ({handleBookmark, handlereadingTime}) => {
    const [blogs, setBlogs]= useState([]);
    useEffect(()=>{
        fetch('/public/blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))

    },[])
    return (
        <div className="w-2/3">
            <h1>blogs: {blogs.length}</h1>
            <div className="grid gap-5">
            {
                blogs.map(blog=><Blog 
                    key={blog.id} 
                    handleBookmark={handleBookmark} 
                    handlereadingTime={handlereadingTime} 
                    blogDetails={blog}></Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;