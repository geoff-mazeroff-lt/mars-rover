import {Direction, Rover} from "./models";

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
    
    it.each([
        ['north', 'west'],
        ['south', 'east'],
        ['east', 'north'],
        ['west', 'south']
    ] as [Direction, Direction][])("when facing %s and turning left, direction changes to %s", (start, end) => {
        const r:Rover = new Rover(0, 0, start);

        r.turnLeft();

        const expected = new Rover(0, 0, end);
        expect(r).toEqual(expected);
    });
})