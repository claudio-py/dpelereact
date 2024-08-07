import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home'
import Serviceum from "./pages/Serviceum";


export default function App(){
  return(
    <BrowserRouter>
    <Routes>
<Route  index element ={<Home/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/serviceum' element={<Serviceum />} />
        {/* <Route path='/servicedois' element={<Servicedois />} />
        <Route path='/servicetres' element={<Servicetres />} />
        <Route path='/servicequatro' element={<Servicequatro />} />
        <Route path='/servicecinco' element={<Servicecinco />} /> */}

    </Routes>
    </BrowserRouter>
  )
}