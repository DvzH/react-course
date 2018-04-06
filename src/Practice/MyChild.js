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

export class MyChild2 extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            Share:0
        }
    }
    
    componentWillReceiveProps(props){
        debugger;
        console.log(props);
        this.setState({
            Share:props.Likes

        })
    }

    render(){
        return(
        <div>
           <p>I am the 2nd child and I have total shares of {this.state.Share} </p>
           
        </div>);
    }
}