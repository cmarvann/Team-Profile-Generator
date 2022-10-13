// TODO: Write code to define and export the Employee class
function Employee (name,id, email) {

 this.name = name
 this.email = email
 this.id = id
}

Employee.prototype.getName = function () {
    return this.name

}

Employee.prototype.getEmail = function () {
    return this.email

}
Employee.prototype.getId = function () {
    return this.id

}

Employee.prototype.getRole = function () {
    return this.role

}

module.exports = Employee;