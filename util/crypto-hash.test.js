const cryptoHash = require("./crypto-hash");

describe("cryptoHash()", () => {
  it("generates a SHA-256 hashed output", () => {
    expect(cryptoHash("gangnam style")).toEqual(
      "580733095101856b71e69d6f8c01a9ab66a0bc1a6558060a9e5a6a0ac37f17a8"
    );
  });

  it("produces the same hash with the same input arguments in any order", () => {
    expect(cryptoHash("one", "two", "three")).toEqual(
      cryptoHash("three", "one", "two")
    );
  });

  it("produces a unique hash when the properties have changed on an input", () => {
    const foo = {};
    const originalHash = cryptoHash(foo);
    foo["a"] = "a";

    expect(cryptoHash(foo)).not.toEqual(originalHash);
  });
});
