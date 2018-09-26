import { stringSearch } from "../algorithms/search/stringSearch";

describe("knuthMorrisPratt", () => {
  it("should find word position in given text", () => {
    expect(stringSearch("", "")).toBe(0);
    expect(stringSearch("a", "")).toBe(0);
    expect(stringSearch("a", "a")).toBe(0);
    expect(stringSearch("abcbcglx", "abca")).toBe(-1);
    expect(stringSearch("abcbcglx", "bcgl")).toBe(3);
    expect(stringSearch("abcxabcdabxabcdabcdabcy", "abcdabcy")).toBe(15);
    expect(stringSearch("abcxabcdabxabcdabcdabcy", "abcdabca")).toBe(-1);
    expect(stringSearch("abcxabcdabxaabcdabcabcdabcdabcy", "abcdabca")).toBe(
      12
    );
    expect(stringSearch("abcxabcdabxaabaabaaaabcdabcdabcy", "aabaabaaa")).toBe(
      11
    );
  });
});
