const Manager = require("../lib/Manager.js");


describe("manager", () => {
    describe("initialization", () => {
      it("should have 'name', 'id', 'email', 'officeNumber' in the object of manager created using the 'new' keyword", () => {
        var object = new Manager();
  
        expect("name" in object).toEqual(true);
        expect("id" in object).toEqual(true);
        expect("email" in object).toEqual(true);
        expect("officeNumber" in object).toEqual(true);
      });
    });
  
    describe("getName function", () => {
      it("should return manager`s name", () => {
        const name = "string";
        const id = "25";
        const email = "testmanager@mail.com";
        const officeNumber = "15"
          const obj = new Manager(name, id, email, officeNumber);
        const result = obj.getName();
        expect(result).toEqual(name);
      });
    });
  
    describe("getID function", () => {
      it("should return manager`s ID", () => {
        const name = "string";
        const id = "25";
        const email = "testmanager@mail.com";
        const officeNumber = "15"
          const obj = new Manager(name, id, email, officeNumber);
        const result = obj.getID();
        expect(result).toEqual(id);
      });
    });
  
  
    describe("getEmail function", () => {
      it("should return manager`s Email", () => {
        const name = "string";
        const id = "25";
        const email = "testmanager@mail.com";
        const officeNumber = "15"
        const obj = new Manager(name, id, email, officeNumber);
        const result = obj.getEmail();
        expect(result).toEqual(email);
      });
    });
  
      
    describe("getschool function", () => {
        it("should return manager`s school", () => {
          const name = "string";
          const id = "25";
          const email = "testmanager@mail.com";
          const officeNumber = "15"
          const obj = new Manager(name, id, email, officeNumber);
          const result = obj.getofficeNumber();
          expect(result).toEqual(officeNumber);
        });
      });
  
    describe("getRole function", () => {
      it("should return manager`s Role", () => {
        const name = "string";
        const id = "25";
        const email = "testmanager@mail.com";
        const officeNumber = "15"
          const obj = new Manager(name, id, email, officeNumber);
        const result = obj.getRole();
        expect(result).toEqual("Manager");
      });
    });
  
  });
  