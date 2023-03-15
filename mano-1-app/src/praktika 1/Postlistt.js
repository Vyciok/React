import React from "react";
import { useState } from "react";
export default function PostList(props){
    const{img, text} = props;
    const [nlike,setnlike] = useState(0);
    const [nhate,setnhate] = useState(0);
    return(
        <div className="col-lg-4 text-center shadow-sm text-bg-dark p-4">
         <img className="bd-placeholder-img rounded-circle" src={img} alt="Girl in a jacket" width="140" height="140"/> 

        <h2>{text}</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <div class=" btn-group ">
            <button class="btn btn-success " onClick={ () => setnlike(nlike+1)}>Like : {nlike}</button>
            <button class="btn btn-danger " onClick={ () => setnhate(nhate+1)}>like : {nhate}</button>
            <button class="btn btn-info " onClick={ () => {setnhate(0); setnlike(0)}}>Reset</button>
        </div>
      </div>
        
        

    );
}