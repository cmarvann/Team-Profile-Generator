// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require('./Employee')

// Function 
function Manager(name, id, email, officeNumber) {

  Employee.call (this, name, id, email)
  this.officeNumber = officeNumber
  
}

Manager.prototype = new Employee()

Manager.prototype.getRole = function() {
    return "Manager"
}

Manager.prototype.getOfficeNumber = function() {
    return this.officeNumber
}

module.exports = Manager;