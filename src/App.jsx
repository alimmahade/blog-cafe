import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs'
import Bookmarks from './Components/Bookmarks'
import Header from './Components/Header'
function App() {
const [bookmark, setBookmark]=useState([]);
const [readingTime, setReadingTime]=useState(0);

const handleBookmark=(blog)=>{
  const newBookmark=[...bookmark, blog];
  setBookmark(newBookmark);
}
const handlereadingTime=(time)=>{
  setReadingTime(readingTime+time);
}


    return (
    <div className=''>
      <Header></Header>
      <div className='md:flex gap-10'>
      <Blogs handleBookmark={handleBookmark} handlereadingTime={handlereadingTime}></Blogs>
      <Bookmarks bookmark={bookmark} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App
