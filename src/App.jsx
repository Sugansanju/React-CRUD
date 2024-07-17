import { Route, Routes } from "react-router-dom"
import Navbar from "./NavbarComp"
import AllUsers from "./AllUsers"


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AllUsers/>} />
      </Routes>
    </>
  )
}

export default App
