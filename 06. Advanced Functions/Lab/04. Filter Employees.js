function solution(employeesData, criteria) {
    const [criteriaPropName, criteriaPropValue] = criteria.split('-');
    return JSON.parse(employeesData)
        .filter(employeeData => employeeData[criteriaPropName] === criteriaPropValue)
        .forEach(
            (employeeData, index) =>
                console.log(`${index}. ${employeeData.first_name} ${employeeData.last_name} - ${employeeData.email}`));
}

solution(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female');