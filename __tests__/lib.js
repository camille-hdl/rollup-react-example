import { helloName } from "../src/lib.js";

test("helloName", () => {
    expect(helloName("ROLLUP")).toEqual("Hello ROLLUP");
});