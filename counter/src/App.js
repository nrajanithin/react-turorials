import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import Profile from './profile';
const employeesDirectory = [ {id:"1", name : "Raja Nithin",position: "Software Engineer"},
{id:"2" ,name : "Ravi Varma" ,position: "Software Engineer"} ];
class App extends Component {
  constructor(props)
  {
     super(props);
     this.state={
       employees : employeesDirectory,
       employeeOfTheMonth : "0"
     }
  }
  setEmployeeOfTheMonth = (employeeId)=>
  {
     this.setState({employeeOfTheMonth : employeeId});
  }
  render()
  {
    return (
      <div className="App">
        <h1>This is Raja Nithin's Page</h1>
        <Counter/>
        {
          this.state.employees.map(employee => {
              return(
                <div style={{backgroundColor: employee.id === this.state.employeeOfTheMonth ? "Red":"White"}}> 
                 <Profile key={employee.id}
                          id={employee.id}
                          name={employee.name}
                          position={employee.position}
                          setEmployeeOfTheMonth = {this.setEmployeeOfTheMonth}/>
                 </div>
                );
            

            })
        }
      </div>
    );
  }
}

export default App;
