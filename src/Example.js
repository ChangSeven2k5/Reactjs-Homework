import React from "react";
function One({width, height, backgroundColor}) {
    return (
        <div>
            <div style={{width:width, height:height, backgroundColor:backgroundColor}}>

            </div>
        </div>
    )
}
// function One(props) {
//     return (
//         <div>
//                 <div className="">
//                     <img src={props.image}></img>
//                     <p>{props.name} </p>
//                     <p>{props.price}</p>
//                 </div>
    
//             </div>
//     )
// }

export default One;