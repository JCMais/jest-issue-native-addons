import ivm from "isolated-vm";
import { pick } from "lodash-es"; // just to validate esm is working

describe("test", () => {
  it("works", () => {
    console.log(ivm);
    console.log(pick);
  });
});
