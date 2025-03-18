import { Component } from "react";


class Welcome extends Component{
    constructor(props){
        super(props);
        this.state={count:0}
        console.log("constructor")
    }

    //5 lifecycle function
    // constructor
    // render
    // Mount
    // Unmount
    // update



    componentDidMount(){
        console.log("Mounted")
    }

    componentWillUnmount(){

        console.log("Unmounted");

    }


    componentDidUpdate(prevProp,prevState){
        console.log("Previous state: "+prevState.count)
        console.log("current state: "+this.state.count)
        console.log("Updated")

    }





    increment = () => { // no function keyword needed here
        this.setState({count:this.state.count+this.props.step})
    }
    decrement= ()=>{
        this.setState({count:this.state.count-this.props.step})
    }
    alertfunction =()=>{

    }
    render(){
        console.log("renered")
        return (
            <div>
            {/* <h1>Welcome, {this.props.name}</h1> */}
            <h1>{this.state.count}</h1>
            <button onClick={this.state.count<this.props.limit?this.increment:this.alertfunction}>+</button>
            <button onClick={this.state.count>this.props.limit2? this.decrement:this.alertfunction}>-</button>
            </div>
        )
    }

}
export default Welcome