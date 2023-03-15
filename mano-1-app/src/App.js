import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import BoxCard from './praktika2/BoxCard';
import Praktikaform from './pratika form/Praktikaform';
import Praktika6 from './praktika 6/Praktika6';
import Praktika7 from './praktika 7/Praktika7';
import Praktika33 from "./praktika 33/Praktika33";
import Postfb from "./praktika 1/Postfb";

function App() {
    return (  
      <> 
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">Navbar</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/Praktikaform">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Praktika6">Features</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Praktika7">Posts</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Praktika33">Pricing</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Postfb">List</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

      <Routes>
        <Route path="/" element={<BoxCard/>}/>
        <Route path="/Praktikaform" element={<Praktikaform/>}/>
        <Route path="/Praktika6" element={<Praktika6/>}/>
        <Route path="/Praktika7" element={<Praktika7/>}/>
        <Route path="/Praktika33" element={<Praktika33/>}/>
        <Route path="/Postfb" element={<Postfb/>}/>
      </Routes>
      </>  
    );
  }
  
  export default App;
  