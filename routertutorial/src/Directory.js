import React,{Component} from "react";
import {getEmployees} from './EmployeeAPI';
class Directory extends Component
{
    employees = getEmployees();
    handleEmployee = (id)=>
    {
        console.log(id);
    }
    render()
    {
        return(
            <div>
              <h1>This is our Directory</h1>
              {
                  this.employees.map(employee => {
                      return <div onClick={this.handleEmployee.bind(this,employee.id)}>{employee.name}</div>
                  })
              }
            </div>

        );
    }
}
export default Directory;