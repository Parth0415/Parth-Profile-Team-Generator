const Employee = require("../lib/Employee.js");

describe("employee", () => {
  describe("initialization", () => {
    it("should have 'name', 'id', 'email' in the object of Employee created using the 'new' keyword", () => {
      var object = new Employee();

      expect("name" in object).toEqual(true);
      expect("id" in object).toEqual(true);
      expect("email" in object).toEqual(true);
    });
  });

  describe("getName function", () => {
    it("should return employee`s name", () => {
      const name = "string";
      const id = "25";
      const email = "testemployee@mail.com";
      const obj = new Employee(name, id, email);
      const result = obj.getName();
      expect(result).toEqual(name);
    });
  });

  describe("getID function", () => {
    it("should return employee`s ID", () => {
      const name = "string";
      const id = "25";
      const email = "testemployee@mail.com";
      const obj = new Employee(name, id, email);
      const result = obj.getID();
      expect(result).toEqual(id);
    });
  });


  describe("getEmail function", () => {
    it("should return employee`s Email", () => {
      const name = "string";
      const id = "25";
      const email = "testemployee@mail.com";
      const obj = new Employee(name, id, email);
      const result = obj.getEmail();
      expect(result).toEqual(email);
    });
  });


  describe("getRole function", () => {
    it("should return employee`s Role", () => {
      const name = "string";
      const id = "25";
      const email = "testemployee@mail.com";
      const obj = new Employee(name, id, email);
      const result = obj.getRole();
      expect(result).toEqual("Employee");
    });
  });

});
