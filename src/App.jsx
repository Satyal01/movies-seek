import {Routes, Route} from "react-router";
import Home from "./components/Home"
import NavBar from "./components/NavBar";
import Favourites from "./components/Favourites";


function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />} >
        <Route index element={<Home />} />
        <Route path="favourites" element={<Favourites />} />
      </Route>
  </Routes>
  )
}

export default App;