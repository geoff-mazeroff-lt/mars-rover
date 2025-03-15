import {Direction, Rover} from "./models";

describe("rover model", () => {
    
    it("rover is at (0,0) facing north", () => {
        const rover:Rover = new Rover(0, 0, 'north');
        
        expect(rover.x).toBe(0);
        expect(rover.y).toBe(0);
        expect(rover.direction).toBe('north');
    })
    
    it.each([
        ['north', 0, 1],
        ['south', 0, -1],
        ['east', 1, 0],
        ['west', -1, 0]
    ] as [Direction, number, number][])("when facing %s and moving forward, position changes to (%d, %d)", (direction, x, y) => {
        const r:Rover = new Rover(0, 0, direction);
        
        r.moveForward();
        
        const expected = new Rover(x, y, direction);
        expect(r).toEqual(expected);
    });
    
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