const Engineer = require("../lib/Engineer.js");


describe("engineer", () => {
    describe("initialization", () => {
      it("should have 'name', 'id', 'email', 'gitHub' in the object of engineer created using the 'new' keyword", () => {
        var object = new Engineer();
  
        expect("name" in object).toEqual(true);
        expect("id" in object).toEqual(true);
        expect("email" in object).toEqual(true);
        expect("gitHub" in object).toEqual(true);
      });
    });
  
    describe("getName function", () => {
      it("should return engineer`s name", () => {
        const name = "string";
        const id = "25";
        const email = "testengineer@mail.com";
        const gitHub = "Parth0415"
          const obj = new Engineer(name, id, email, gitHub);
        const result = obj.getName();
        expect(result).toEqual(name);
      });
    });
  
    describe("getID function", () => {
      it("should return engineer`s ID", () => {
        const name = "string";
        const id = "25";
        const email = "testengineer@mail.com";
        const gitHub = "Parth0415"
        const obj = new Engineer(name, id, email, gitHub);
        const result = obj.getID();
        expect(result).toEqual(id);
      });
    });
  
  
    describe("getEmail function", () => {
      it("should return engineer`s Email", () => {
        const name = "string";
        const id = "25";
        const email = "testengineer@mail.com";
        const gitHub = "Parth0415"
          const obj = new Engineer(name, id, email, gitHub);
        const result = obj.getEmail();
        expect(result).toEqual(email);
      });
    });
  
      
    describe("getGitHub function", () => {
        it("should return engineer`s gitHub", () => {
          const name = "string";
          const id = "25";
          const email = "testengineer@mail.com";
          const gitHub = "Parth0415"
          const obj = new Engineer(name, id, email, gitHub);
          const result = obj.getGitHub();
          expect(result).toEqual(gitHub);
        });
      });
  
    describe("getRole function", () => {
      it("should return engineer`s Role", () => {
        const name = "string";
        const id = "25";
        const email = "testengineer@mail.com";
        const gitHub = "Parth0415"
          const obj = new Engineer(name, id, email, gitHub)
        const result = obj.getRole();
        expect(result).toEqual("Engineer");
      });
    });
  
  });
  