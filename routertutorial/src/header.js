import React,{Component} from "react";
import {withRouter} from "react-router-dom";

class Header extends Component
{
    handleClickHome = ()=>
    {
       this.props.history.push("/");
    }
    handleClickDirectory = ()=>
    {
      this.props.history.push("/Directory");
    }
    render()
    {
        return(
            <div>
              <h1>This is the Header</h1>
              <button onClick={this.handleClickHome}>Home</button>
              <button onClick={this.handleClickDirectory}>Directory</button>
              
            </div>
             
        );
    }
}
export default withRouter(Header);