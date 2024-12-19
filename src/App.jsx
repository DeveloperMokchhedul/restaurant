import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import BestRestaurant from "./pages/BestRestaurant"
import Italia from "./pages/Italia"
import useTheme from "./context/ThemeContext"





function App() {
  const { isDarkMode } = useTheme();
  return (
    <>
      <div className={isDarkMode ? "dark" : ""}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/allrestaurant" element={<BestRestaurant />} />
          <Route path="/home/italia" element={<Italia />} />


        </Routes>
        <Footer />
      </div>

    </>
  )
}

export default App