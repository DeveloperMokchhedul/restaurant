import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import BestRestaurant from "./pages/BestRestaurant"


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element = {<Home />}  />
      <Route path="/home/allrestaurant" element = {<BestRestaurant />}  />
      

    </Routes>
    <Footer />

    </>
  )
}

export default App