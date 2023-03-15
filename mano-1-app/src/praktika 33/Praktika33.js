import React, {useState} from 'react';
function Praktika33(){
    const[tektas,pilnasTextas]=useState(false);
    function roditTexta(){
         pilnasTextas(!tektas);
}
return (
        <div className="row ">
            <div className="col">
                <div className="card shadow-sm">
                    <div className="card-body">
                    <h5 className="card-title">Testas su textu</h5>
                    <p className="card-text"> Attigi aetate jam nullis ubi falsae terram realem. Rei jam discrepant iii aliquoties qua falsitatis mortalibus. Re im de {tektas ? "t in ob argutari efficere formalem competit existere augeatur vi. Probentur potuerunt oblivisci si " : " "}<b onClick={roditTexta} > {tektas ? "Skaityk maziau " : "Skaitik daugiau..."}</b></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Praktika33;