import { Component } from "react";


class Welcome extends Component{
    constructor(props){
        super(props);
        this.state={count:0}
        
    }
    increment = () => { // no function keyword needed here
        this.setState({count:this.state.count+this.props.step})
    }
    decrement= ()=>{
        this.setState({count:this.state.count-this.props.step})
    }
    alertfunction =()=>{
        alert("Can't go further")
    }
    render(){
        return (
            <div>
            {/* <h1>Welcome, {this.props.name}</h1> */}
            <h1>{this.state.count}</h1>
            <button onClick={this.props.limit?this.increment:this.alertfunction}>+</button>
            <button onClick={this.props.limit? this.decrement:this.alertfunction}>-</button>
            </div>
        )
    }

}
export default Welcome