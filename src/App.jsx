import Header from "./components/Header"
import HomeBody from "./components/HomeBody"

function App(){

  return(
    <div className=" bg-[url('/src/utils/libraryimageBGImage.png')] bg-cover bg-center min-h-screen w-full " >
      {/* <h1>App</h1> */}
      <Header />
      <HomeBody />
    </div>
  )
}

export default App