import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Section from "./components/Section/Section"
import Admin from "./components/pages/Admin/Admin"
import About from "./components/pages/About/About"
import Projects from "./components/pages/Projects/Projects"
import News from "./components/pages/News/News"
import Shop from "./components/pages/Shop/Shop"
import Home from "./components/pages/Home/Home"
import Detailcard from "./components/Detail/Detailcard"



function App() {

  return (
<div>
<Header/>
<Routes>
  <Route path="/" element={<Section/>}/>
  <Route path="/admin" element={<Admin/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/projects" element={<Projects/>}/>
  <Route path="/news" element={<News/>}/>
  <Route path="/shop" element={<Shop/>}/>
  <Route path="/home" element={<Home/>}/>
<Route path="/details" element={<Detailcard/>}/>






</Routes>
</div>
  )
}

export default App
