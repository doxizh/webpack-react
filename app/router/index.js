import React from 'react';
import { HashRouter,Route,Link } from 'react-router-dom';
import App from '../app';
import Home from '../pages/home';
import About from '../pages/about';

export default class Router extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <HashRouter>
                <Route path='/' exact={true} component={Home}/>
                <Route path='/about' title="sss" component={About}/>
            </HashRouter>
        )
    }
}