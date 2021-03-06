class Person {
  private firstName: string;
  private lastName: string;

  constructor(firstName?: string, lastName: string = "") {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

var person = new Person("Ck");
console.log(person.getFullName());