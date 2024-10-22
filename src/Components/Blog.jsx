
import { CiBookmark } from "react-icons/ci";
const Blog = ({blogDetails, handleBookmark, handlereadingTime}) => {
    const {title,cover,id,author,author_img,posted_date,reading_time}=blogDetails;
    return (
        <div className="bg-gray-300 border rounded-md p-5 grid gap-5">
            <img className="rounded-md w-full" src={cover} alt="" />
            
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div>
                    <img className="w-14" src={author_img} alt="" />
                    </div>
                    <div>
                    <p>Author Name: {author}</p>
                    <p>Published: {posted_date}</p>
                    </div>
                </div>
                <div>
                    <p>{reading_time} min read </p>
                    <button onClick={()=>handleBookmark(blogDetails)} className="btn">Bookmarks
                    <CiBookmark />                        
                    </button>
                    
                </div>
            </div>
            <h1 className="text-4xl">{title}</h1>
            <button onClick={()=>handlereadingTime(reading_time)} className="btn">Reading Time</button>
        </div>
    );
};

export default Blog;
