const cryptoHash = require("./crypto-hash");

describe("cryptoHash()", () => {
  it("generates a SHA-256 hashed output", () => {
    expect(cryptoHash("gangnam style")).toEqual(
      "52a5fe701a2090b0ab9420bff0b0408b1b39734e4015880dab227b60d28bc7cc"
    );
  });

  it("produces the same hash with the same input arguments in any order", () => {
    expect(cryptoHash("one", "two", "three")).toEqual(
      cryptoHash("three", "one", "two")
    );
  });
});
