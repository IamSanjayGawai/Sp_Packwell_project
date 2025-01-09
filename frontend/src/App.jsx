import DetailPage from "./pages/DetailPage"
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./pages/About"
// import image from "../assets/Photo/Photo/"

function App() {
  return (
    <>
     <Navbar/>
    <Routes>    
      <Route path="/" element={ <Home/>} />
      <Route path="/detail-page/:id" element={  <DetailPage/>} />
      <Route path="/about" element ={<About/>} />
   

     </Routes>

     <Footer/>
    </>
  )
}

export default App
