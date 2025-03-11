// This is a sum-type / union-type
type Direction = 'north' | 'south' | 'east' | 'west';

// Rover as a class -- more common than the verbose version above, also found in Angular that expects classes
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
