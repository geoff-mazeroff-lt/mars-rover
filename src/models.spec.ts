import {Rover} from "./models";

describe("rover model", () => {
    
    it("rover is at (0,0) facing north", () => {
        const rover:Rover = new Rover(0, 0, 'north');
        
        expect(rover.x).toBe(0);
        expect(rover.y).toBe(0);
        expect(rover.direction).toBe('north');
    })
    
    it("when moving forward and facing north, y value increases", () => {
        const r:Rover = new Rover(0, 0, 'north');
        
        r.moveForward();

        const expected = new Rover(0, 1, 'north');
        expect(r).toEqual(expected);
    })

    it("when moving forward and facing south, y value decreases", () => {
        const r:Rover = new Rover(0, 0, 'south');

        r.moveForward();

        const expected = new Rover(0, -1, 'south');
        expect(r).toEqual(expected);
    })

    it("when moving forward and facing east, x value increases", () => {
        const r:Rover = new Rover(0, 0, 'east');

        r.moveForward();

        const expected = new Rover(1, 0, 'east');
        expect(r).toEqual(expected);
    })

    it("when moving forward and facing west, x value decreases", () => {
        const r:Rover = new Rover(0, 0, 'west');

        r.moveForward();

        const expected = new Rover(-1, 0, 'west');
        expect(r).toEqual(expected);
    })
    
    it("when facing north and turning left, direction changes to west", () => {
        const r:Rover = new Rover(0, 0, 'north');

        r.turnLeft();

        const expected = new Rover(0, 0, 'west');
        expect(r).toEqual(expected);
    })

    it("when facing south and turning left, direction changes to east", () => {
        const r:Rover = new Rover(0, 0, 'south');

        r.turnLeft();

        const expected = new Rover(0, 0, 'east');
        expect(r).toEqual(expected);
    })

    it("when facing east and turning left, direction changes to north", () => {
        const r:Rover = new Rover(0, 0, 'east');

        r.turnLeft();

        const expected = new Rover(0, 0, 'north');
        expect(r).toEqual(expected);
    })

    it("when facing west and turning left, direction changes to south", () => {
        const r:Rover = new Rover(0, 0, 'west');

        r.turnLeft();

        const expected = new Rover(0, 0, 'south');
        expect(r).toEqual(expected);
    })
})