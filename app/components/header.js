import React from 'react'

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLogin:false
        }
    }
    login(){
        console.log(this.state.isLogin);
        this.setState({
            isLogin:true
        })
    }
    logout(){
        console.log(this.state.isLogin);
        this.setState({
            isLogin:false
        })
    }
    render(){
        let button=null;
        if(!this.state.isLogin){
            button=(
                <div onClick={()=>this.login()}>登录</div>
            )
        }else {
            button=(
                <div onClick={()=>this.logout()}>注销</div>
            )
        }
        return(
            <div className="header">
                <h1>{this.props.title}</h1>
                {button}
            </div>
        )
    }
}