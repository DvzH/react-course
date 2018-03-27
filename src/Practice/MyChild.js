import React from "react";

export const MyChild= (props) => {
    console.log(props);
   // props.stateUpdate(10);
    return (
        <div>
            <h2>Hello this content is from child Element</h2>
            <p>We have {props.Comments} comments</p>
            <button onClick={()=>props.stateUpdate(5)}>ChildUpdate</button>
        </div>
    )
}