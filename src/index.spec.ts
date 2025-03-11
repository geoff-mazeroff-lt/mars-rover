// describe block --> test class
// it or test --> test functions

import {add} from "./index";

describe("add", () => {
   
    it("when adding negative numbers", () => {
        const result = add(-4, -4);
        expect(result).toBe(-8);
    })
    
});