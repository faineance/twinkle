class Vec {
    public x: number;
    public y: number;
    
    constructor(x: number, y:number) {
        this.x = x
        this.y = y
    }
}

class Map {
    size: number;
    walls: Uint8Array;
    constructor(size: number) {
        this.size = size;
        this.walls = new Uint8Array(size * size);
    }
    get(x: number, y: number) {
        x = Math.floor(x);
        y = Math.floor(y);

        if (x < 0 || x > this.size - 1 || y < 0 || y > this.size - 1) return -1;
        return this.walls[y * this.size + x]
    }

    cast(point: Vec, angle: number, range: number) {

    }



}
class Player {
    x: number;
    y: number;

    direction: number;

    constructor(x: number, y: number, direction: number) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }
    rotate(angle: number) {
        this.direction = (this.direction + angle + (Math.PI * 2)) % (Math.PI * 2);
    }

    walk(distance: number, map: Map) {
        var dx = Math.cos(this.direction) * distance;
        var dy = Math.sin(this.direction) * distance;
        if (map.get(this.x + dx, this.y) <= 0) this.x += dx;
        if (map.get(this.x, this.y + dy) <= 0) this.y += dy;
    }
}
class Engine {
    id: string;
    canvas: any;
    ctx: CanvasRenderingContext2D;
    player: Player;
    map: Map;
    constructor(id: string) {
        this.id = id
    }
    setup() {
        this.canvas = document.getElementById(this.id);
        this.ctx = this.canvas.getContext('2d')
    }

    start() {

    }
    update() {

    }
}


window.onload = function() {
    var engine = new Engine('canvas')
    engine.start()
}