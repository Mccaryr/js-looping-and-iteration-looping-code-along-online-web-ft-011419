const employeeNames = ['Ada', 'Brendan', 'Ali']
function printBadges(employeeNames) {
  for (let i=0; i < employeeNames.length; i++){
    console.log("Welcome ${employeeNames[i]}! You are employee #${i + 1}.")
  }
  return employeeNames
}
