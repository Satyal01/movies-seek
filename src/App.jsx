import {Routes, Route} from "react-router";
import Home from "./components/Home"
import NavBar from "./components/NavBar";
import Favourites from "./components/Favourites";
import MoviePage from "./components/MoviePage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />} >
        <Route index element={<Home />} />
        <Route path="/:id" element={<MoviePage/>}/>
        <Route path="favourites" element={<Favourites />} />
        <Route path="*" element={<div className="min-h-screen bg-black text-white text-center text-2xl"> Page not Found</div>} />
      </Route>
  </Routes>
  )
}

export default App;