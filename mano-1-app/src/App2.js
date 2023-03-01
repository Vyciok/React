import React from "react";
import App from "./App";
import OnColor from "./OnColor";
import BoxCard from "./praktika2/BoxCard";
import Praktika3 from "./praktika 3/Praktika3";
function App2() {
    return (
      
      <div>
        <Praktika3/>
        <div class="row  row-cols-md-3 g-1">
        <App />
        <BoxCard />
        <OnColor /> 
      </div>
      </div>
      
    );
  }
  
  export default App2;
  