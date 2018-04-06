import React from "react";
import ReactDOM from "react-dom";
import {MyChild,MyChild2} from './MyChild'

export class Practice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Likes: 0,
            Comments:10
        }
    }

    stateUpdateFun = (props) => {
        
        this.setState({
            Likes: props.state.Likes+5  
        })
    }

    stateUpdateFromChild=(e)=>{
        debugger;
        console.log(e);
        let myLikes=this.state.Likes;
        this.setState({
            Likes:myLikes+e,
            Comments:myLikes+e
        });
    }

    render() {
        return (
            <div>
            
                <p>Hello We are here to learn React</p>
                {
                    this.state.Likes
                }
                <MyChild stateUpdate={this.stateUpdateFromChild}{...this.state}/>
                <MyChild2 {...this.state}/>
                <button onClick={()=>this.stateUpdateFun(this)}>Update Likes</button>
               
            </div>
        )
    }
}

ReactDOM.render(
    <Practice />,
    document.getElementById('app')
);
