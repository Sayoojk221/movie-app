import React,{useState} from "react";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Movie from "./components/SingleMovie";
import { NavBar } from "./components/common/NavBar";

function App() {
  const [favourite, setFavourite] = useState([]);
  const [open,setOpen] = useState(false)
  return (
    <>
      <NavBar open={open} setOpen={setOpen}/>
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route
            path="/movie/:id"
            exact
            element={
              <Movie favourite={favourite} setFavourite={setFavourite} />
            }
          />
        </Routes>
      </div>
      <div
        id="open-modal"
        className="modal-window"
        style={
          open
            ? { visibility: "visible", opacity: "1", pointerEvents: "auto" }
            : {}
        }
      >
        <div>
          <a  onClick={() => setOpen(false)} id="modelClose">
            <img src="icons8-macos-close-32.png" />
          </a>
          <ul style={{marginRight: '31px'}}>
            <li>
            <Link onClick={() => setOpen(false)} to={'/'}>Home</Link>
            </li>
            <li>
            <Link onClick={() => setOpen(false)} to={'/about'}>About</Link>

            </li>
           
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
