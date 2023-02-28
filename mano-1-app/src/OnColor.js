import React from "react";
import { useState } from "react";
function OnColor() {
    const [color, setColor] = useState("text-danger");
    function changeColor () {
        setColor("text-success");
    }
    return(
     <div class="card text-bg-dark mb-3" >
        <div class="card-header">
            Featured
        </div>
        <div class="card-body">
            <h5 className={color}>My fovarite color is {color}!</h5>
            <p class={color}>With supporting text below as a natural lead-in to additional content.</p>
            <button onClick={changeColor} type = "button" class="btn btn-danger">
                Pakeisti spalva
            </button>
        </div>
    </div>
        
    )
}
export default OnColor;