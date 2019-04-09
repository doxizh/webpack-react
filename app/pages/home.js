import React from "react";
import {Route, Link} from "react-router-dom";
import Header from '../components/header'
import About from './about'
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            title: 'home-title',
            name: 'text'
        };
        // this.changeTitle=this.changeTitle.bind(this);
    }

    changeTitle(num, e) {
        console.log(e.target);
        this.setState((preState) => ({
            num: preState.num + 1
        }));
        this.setState({
            title: 'home-title' + this.state.num
        });
    }

    changeValue(e) {
        this.setState({
            name: e.target.value
        })
    }

    submitForm(e) {
        e.preventDefault();
        console.log(this.state.name)
    }

    goAbout() {
        this.props.history.push({pathname: '/about', search: '?b=1'});
    }

    render() {
        const numbers = [1, 2, 3];
        const itemsList = numbers.map((num) => {
            return (
                <li key={num.toString()}>{num}</li>
            )
        });
        return (
            <div className="home">
                <Header title={this.state.title}/>
                <h3 onClick={(e) => this.changeTitle(1, e)}>这是home.js</h3>
                <ul>{itemsList}</ul>
                <form action="" onSubmit={(e) => this.submitForm(e)}>
                    <input type="text" value={this.state.name} onChange={(e) => this.changeValue(e)}/>
                </form>
                <Link to={{pathname: '/about', query: {a: 1}}}>go about</Link>
                <button onClick={() => this.goAbout()}>go about</button>
            </div>
        )
    }
}