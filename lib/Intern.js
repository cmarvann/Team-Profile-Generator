// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee')

// Function 
function Intern(name, id, email, school) {

  Employee.call (this, name, id, email)
  this.school = school
  
}

Intern.prototype = new Employee()

Intern.prototype.getRole = function() {
    return "Intern"
}

Intern.prototype.getSchool = function() {
    return this.school
}

module.exports = Intern;