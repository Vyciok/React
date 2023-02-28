import React from "react";
import { useState } from "react";
function BoxCard() {
    const [nlike,setnlike] = useState(0);
    const [nhate,setnhate] = useState(0);
    return (
        <div class="card text-bg-dark mb-3">
            <img src="https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66.jpg" class="card-img-top" alt="people"/>
            <div class="card-body">
                {/* <h5 class="card-title">Card title</h5> */}
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button class="btn btn-success " onClick={ () => setnlike(nlike+1)}>Like : {nlike}</button>
                <button class="btn btn-danger ms-3" onClick={ () => setnhate(nhate+1)}>Hate : {nhate}</button>
                <button class="btn btn-info ms-3" onClick={ () => {setnhate(0); setnlike(0)}}>Reset</button>
            </div>
        </div>
    );
  }
  
  export default BoxCard;
  