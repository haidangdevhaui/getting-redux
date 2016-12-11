import React, {Component} from 'react';
export default class ButtonFucking extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        this.fuckMe = this.fuckMe.bind(this);
    }
    fuckMe(){
        this.setState({count: this.state.count + 1});
    }
    render(){
        return (<button onClick={this.fuckMe}>Fuck me! {this.state.count} hit</button>)
    }
}