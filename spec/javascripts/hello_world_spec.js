import Hello from "hello_world";

describe("Hello", () => {
  it("greets the user", () => {
    let hello = new Hello();
    expect(hello.greet()).toEqual("Hello world!");
  });
});
