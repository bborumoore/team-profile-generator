const Employee = require("./Employee");

class Manager extends Employee {

  constructor(name, id, email, PhoneNumber) {
    super(name, id, email);
    this.PhoneNumber = PhoneNumber;
  }

  getRole() {
    return "Manager";
  }

  getPhoneNumber() {
    return this.PhoneNumber;
  }

}

module.exports = Manager;
