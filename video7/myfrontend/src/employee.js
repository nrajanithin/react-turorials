import React from "react";
import axios from "axios";
class Employee extends React.Component
{
    constructor()
    {
       super();
       this.state = {
             employees : []
                   };
    };
    showDetails = ()=>
    {
       fetch('http://localhost:5000/getinfo')
        .then(response => response.json())
        .then(data => this.setState({employees:data}))
       /* axios.post("http://localhost:5000/getinfo",{"name":"Raja Nithin","age":"21"})
        .then(response => {
            console.log(response)
        }) 
        .catch(error => {
            console.log(error)
        })*/
    }
    render()
    {
        return(
            <div>
                <button onClick={this.showDetails}>Click the button to get the details:</button>
                <h1>The details of the Employees are below:</h1>
                <table style={{border: "1px solid black",marginLeft:"10px"}}>
                 {this.state.employees.map(el => (
                   <tr>
                       <td key={el.id} style ={{border: "1px solid black"}}>{el.employee_name}</td>
                       <td style ={{border: "1px solid black"}}>{el.employee_age}</td>
                       <td style ={{border: "1px solid black"}}>{el.employee_salary}</td>
                   </tr> 
                   ))}
                </table>
            </div>
        );
    }
}
export default Employee;