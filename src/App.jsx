import AddBook from "./components/AddBook"
import Header from "./components/Header"
import HomeBody from "./components/HomeBody"
import NewBrowseBooks from "./components/NewBrowseBooks"

// import routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){

  return(
    <BrowserRouter>
      <div className=" bg-[url('/src/utils/libraryimageBGImage.png')] bg-cover bg-center min-h-screen w-full " >
        
        <Header />
        {/* creating routes for navigation inside the app */}
        <Routes>
          <Route path="/" element ={ <HomeBody />} />
          <Route path="/browsebooks" element ={ <NewBrowseBooks />} />
          <Route path="/add_book" element ={ <AddBook />} />
          {/* <Route path="/" element ={ <HomeBody />} /> */}
        </Routes>
        
      </div>
    </BrowserRouter>
  )
}

export default App