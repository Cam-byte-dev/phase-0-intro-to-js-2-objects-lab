

const employee = {
    name: 'sam',
    streeAddress: undefined
};

function updateEmployeeWithKeyAndValue(employee,key,value){
   
    const newEmployee = {...employee};
    newEmployee['streetAddress'] = value;
   return employee, newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){

    employee[key] = value;
    return employee;

};

function deleteFromEmployeeByKey(employee,key,value){

    const newEmployee = {...employee};
    delete newEmployee['name'];
    return newEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee['name'];
    return employee;

}



