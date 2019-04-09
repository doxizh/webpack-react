import React from "react";

export default class About extends React.Component{
    constructor(props){
        super(props);
        this.state={
            num:0,
            title:'home-title',
            name:'text'
        };
        // this.changeTitle=this.changeTitle.bind(this);
    }
    goBack(){
        this.props.history.push('/');
    }
    render(){
        console.log(this.props);
        return(
            <div className="about">
                <div>about</div>
                <button onClick={()=>this.goBack()}>返回</button>
            </div>
        )
    }
}