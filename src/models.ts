﻿// This is a sum-type / union-type
export type Direction = 'north' | 'south' | 'east' | 'west';

// Rover as a class -- more common than the verbose version below; also found in Angular that expects classes
export class Rover {
    x:number;
    y:number;
    direction:Direction;
    
    constructor(x:number, y:number, direction:Direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }
    
    moveForward() : void {
        switch (this.direction) {
            case 'north':
                this.y++;
                break;
            case 'south':
                this.y--;
                break;
            case 'east':
                this.x++;
                break;
            case 'west':
                this.x--;
                break;
        }
    }
    
    turnLeft() : void {
        switch (this.direction) {
            case 'north':
                this.direction = 'west';
                break;
            case 'south':
                this.direction = 'east';
                break;
            case 'east':
                this.direction = 'north';
                break;
            case 'west':
                this.direction = 'south'
                break
        }
    }
}




// Rover as just a type -- more functional style.
// type Rover = {
//     x:number;
//     y:number;
//     direction:Direction;
// }

// Very verbose as a class!
// class Rover {
//     private readonly x:Number;
//     private readonly y:Number;
//     private readonly direction:Direction;
//    
//     constructor(x:number, y:number, direction:Direction){
//         this.x = x;
//         this.y = y;
//         this.direction = direction;
//     }
// }
