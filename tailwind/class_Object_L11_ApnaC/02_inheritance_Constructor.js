class person {
  constructor() {
    this.species = "homo sapiens";
  }
  work() {
    console.log("do nothing");
  }

  eat() {
    console.log("eating is regular");
  }
  work() {
    console.log("person have to work ");
  }
}

class Engineer extends person {
  work() {
    console.log("has to write code"); // it is method overrrite - child element parent ko cover kar leta hai agar same function ho toh parent or child mai toh
  }
}

class Doctor extends person {
  work() {
    console.log("treat patients"); // we inherit the person class in the doctor class
  }
}

let jaydeepObj = new Engineer();





