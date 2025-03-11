import {Rover} from "./models";

describe("rover model", () => {
    
    it("rover is at (0,0) facing north", () => {
        const rover:Rover = new Rover(0, 0, 'north');
        expect(rover.x).toBe(0);
        expect(rover.y).toBe(0);
        expect(rover.direction).toBe('north');
    })
    
})