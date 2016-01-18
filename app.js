var Vec = (function () {
    function Vec(x, y) {
        this.x = x;
        this.y = y;
    }
    return Vec;
})();
var Map = (function () {
    function Map(size) {
        this.size = size;
        this.walls = new Uint8Array(size * size);
    }
    Map.prototype.get = function (x, y) {
        x = Math.floor(x);
        y = Math.floor(y);
        if (x < 0 || x > this.size - 1 || y < 0 || y > this.size - 1)
            return -1;
        return this.walls[y * this.size + x];
    };
    Map.prototype.cast = function (point, angle, range) {
    };
    return Map;
})();
var Player = (function () {
    function Player(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }
    Player.prototype.rotate = function (angle) {
        this.direction = (this.direction + angle + (Math.PI * 2)) % (Math.PI * 2);
    };
    Player.prototype.walk = function (distance, map) {
        var dx = Math.cos(this.direction) * distance;
        var dy = Math.sin(this.direction) * distance;
        if (map.get(this.x + dx, this.y) <= 0)
            this.x += dx;
        if (map.get(this.x, this.y + dy) <= 0)
            this.y += dy;
    };
    return Player;
})();
var Engine = (function () {
    function Engine(id) {
        this.id = id;
    }
    Engine.prototype.setup = function () {
        this.canvas = document.getElementById(this.id);
        this.ctx = this.canvas.getContext('2d');
    };
    Engine.prototype.start = function () {
    };
    Engine.prototype.update = function () {
    };
    return Engine;
})();
window.onload = function () {
    var engine = new Engine('canvas');
    engine.start();
};
