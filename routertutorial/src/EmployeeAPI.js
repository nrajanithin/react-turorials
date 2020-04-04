const employees = [
    {
        id : "1",
        name : "Nithin",
        role : "SE"
    },
    {
        id : "2",
        name : "Raja",
        role : "SE"
    },
    {
        id : "3",
        name : "Raja Nithin",
        role : "CEO"
    }
];
export const getEmployees = ()=>
{
    return employees;
}
export const getEmployeeById = (id)=>
{
   return employees.filter(employee =>{
       return employee.id === id;
   })
}