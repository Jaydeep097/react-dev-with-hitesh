//The following code provides an example of a class 'User' with 'name' and 'email' properties and a 'viewData()' method:

let DATA = "secret info";

class User {   // Parent class
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("Data =", DATA);
  }
}

// Child class inheriting from User
class Admin extends User {
  constructor(name, email) {
    super(name, email);   // call parent constructor
  }

  editData(newValue) {
    DATA = newValue;
  }
}

// Creating users
let student1 = new User("jaydeep", "jaydeee@gmail.com");
let student2 = new User("sidd", "sid123@gmail.com");

// Creating admin
let admin1 = new Admin("ashish", "ashu@423@gmail.com");

// Accessing data
student1.viewData();   // Data = secret info
student2.viewData();   // Data = secret info

// Admin edits the data
admin1.editData("some new value");

// After edit
student1.viewData();   // Data = some new value
student2.viewData();   // Data = some new value

