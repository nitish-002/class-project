import { Component } from "react";


class Welcome extends Component{
    constructor(props){
        super(props);
        this.state={count:0}
        
    }
    increment = () => { // no function keyword needed here
        this.setState({count:this.state.count+1})
    }
    decrement= ()=>{
        this.setState({count:this.state.count-1})
    }
    alertfunction =()=>{
        alert("Can't go further")
    }
    render(){
        return (
            <div>
            {/* <h1>Welcome, {this.props.name}</h1> */}
            <h1>{this.state.count}</h1>
            <button onClick={this.state.count<10?this.increment:this.alertfunction}>+</button>
            <button onClick={this.state.count>-10? this.decrement:this.alertfunction}>-</button>
            </div>
        )
    }

}
export default Welcome