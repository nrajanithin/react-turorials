import React, {Component} from "react";
class Lifecycle extends Component
{
    constructor()
    {
        super();
        this.state = {
            displayString : "We are in constructor",
            counter : 0,
            didDisplayStringUpdate : false
        };
       // console.log("I am BACK")
    }
    handleChangeDisplayString = ()=>
    {
        this.setState({displayString : "nithin string", didDisplayStringUpdate:true});
    }
    componentDidUpdate= (prevProps, prevState)=>
    {
       if(this.state.didDisplayStringUpdate === true)
       {
           this.setState({counter:this.state.counter+1, didDisplayStringUpdate : false})
       }
    }
    componentWillUnmount = ()=>
    {
        console.log("Good Bye!!!");
    }
    componentDidMount= () =>
    { 
        this.setState({displayString : "we are in component did mount",
                        didDisplayStringUpdate: true});
    }
    render()
    {
        return(
            <div>
                <h2>This is our life cycle Component</h2>
                <h3>Current state change counter: {this.state.counter}</h3>
                <h4>The current display string {this.state.displayString}</h4>
                <button onClick = {this.handleChangeDisplayString}>click</button>
            </div> 
        );
        
    }
}
export default Lifecycle;