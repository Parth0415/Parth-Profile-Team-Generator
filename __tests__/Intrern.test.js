const Intern = require("../lib/Intern.js");


describe("intern", () => {
    describe("initialization", () => {
      it("should have 'name', 'id', 'email', 'school' in the object of intern created using the 'new' keyword", () => {
        var object = new Intern();
  
        expect("name" in object).toEqual(true);
        expect("id" in object).toEqual(true);
        expect("email" in object).toEqual(true);
        expect("school" in object).toEqual(true);
      });
    });
  
    describe("getName function", () => {
      it("should return intern`s name", () => {
        const name = "string";
        const id = "25";
        const email = "testintern@mail.com";
        const school = "schoolname"
          const obj = new Intern(name, id, email, school);
        const result = obj.getName();
        expect(result).toEqual(name);
      });
    });
  
    describe("getID function", () => {
      it("should return intern`s ID", () => {
        const name = "string";
        const id = "25";
        const email = "testintern@mail.com";
        const school = "schoolname"
        const obj = new Intern(name, id, email, school);
        const result = obj.getID();
        expect(result).toEqual(id);
      });
    });
  
  
    describe("getEmail function", () => {
      it("should return intern`s Email", () => {
        const name = "string";
        const id = "25";
        const email = "testintern@mail.com";
        const school = "schoolname"
        const obj = new Intern(name, id, email, school);
        const result = obj.getEmail();
        expect(result).toEqual(email);
      });
    });
  
      
    describe("getschool function", () => {
        it("should return intern`s school", () => {
          const name = "string";
          const id = "25";
          const email = "testintern@mail.com";
          const school = "schoolname"
          const obj = new Intern(name, id, email, school);
          const result = obj.getSchool();
          expect(result).toEqual(school);
        });
      });
  
    describe("getRole function", () => {
      it("should return intern`s Role", () => {
        const name = "string";
        const id = "25";
        const email = "testintern@mail.com";
        const school = "schoolname"
          const obj = new Intern(name, id, email, school);
        const result = obj.getRole();
        expect(result).toEqual("Intern");
      });
    });
  
  });
  