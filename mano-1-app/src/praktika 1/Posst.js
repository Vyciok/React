import React from "react";
import { useState } from "react";
function Main2(props) {
  let {title,content,img} =props;
  const [nlike,setnlike] = useState(0);
    const [nhate,setnhate] = useState(0);
    return (
          <div class=" card shadow-sm text-bg-dark mb-3 ">
          <img src={img} alt={title}/>
            <div class="card-body">
              <p class="card-text">{content}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button class="btn btn-success " onClick={ () => setnlike(nlike+1)}>Like : {nlike}</button>
                <button class="btn btn-danger " onClick={ () => setnhate(nhate+1)}>Hate : {nhate}</button>
                <button class="btn btn-info " onClick={ () => {setnhate(0); setnlike(0)}}>Reset</button>
                </div>
                <small class="text-muted">{title}</small>
              </div>
            </div>
          </div>
    );
  }
  
  export default Main2;
  