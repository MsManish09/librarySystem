import AddBook from "./components/AddBook"
import BrowseBooks from "./components/BrowseBooks"
import Header from "./components/Header"
import HomeBody from "./components/HomeBody"
import NewBrowseBooks from "./components/NewBrowseBooks"

function App(){

  return(
    <div className=" bg-[url('/src/utils/libraryimageBGImage.png')] bg-cover bg-center min-h-screen w-full " >
      {/* <h1>App</h1> */}
      {/* <Header />
      <HomeBody /> */}
      {/* <BrowseBooks /> */}
      <NewBrowseBooks />
      {/* <AddBook /> */}
    </div>
  )
}

export default App