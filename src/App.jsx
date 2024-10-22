import './App.css'
import Blogs from './Components/Blogs'
import Bookmarks from './Components/Bookmarks'
import Header from './Components/Header'

function App() {
  

  return (
    <div className='w-11/12'>
      <Header></Header>
      <div>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
