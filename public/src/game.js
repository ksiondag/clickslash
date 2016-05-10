(function () {
'use strict';

var player, hitbox;

player = Crafty.e('Player');

hitbox = Crafty.e('Hitbox,DOM,Color')
    .color('green')
    .attr({
        w: 50,
        h: 50
    })
;

player.addHitbox(-25, -25, hitbox);

hitbox = Crafty.e('Hitbox,DOM,Color')
    .color('blue')
    .attr({
        w: 10,
        h: 10
    })
    .bind('EnterFrame', function () {
        if (!this._parent) {
            return;
        }
        this.attr({
            x: this._parent.x - this.w/2 + 48*Math.sin(Crafty.frame()/30),
            y: this._parent.y - this.h/2 + 48*Math.cos(Crafty.frame()/30)
        });
    })
;
player.addHitbox(-10, -10, hitbox);

hitbox = Crafty.e('Hitbox,DOM,Color')
    .color('red')
    .attr({
        w: 25,
        h: 25,
        dx: [],
        dy: []
    })
    .bind('PlayerMove', function (e) {
        var dx, dy, sqrt, slice;

        if (!this._parent) {
            return;
        }

        if (!e.dx && !e.dy) {
            return;
        }

        this.dx.push(e.dx);
        this.dy.push(e.dy);

        slice = this.dx.length - 20;
        if (slice > 0) {
            this.dx = this.dx.slice(slice);
            this.dy = this.dy.slice(slice);
        }

        dx = this.dx.reduce((sum, value) => sum + value, 0);
        dy = this.dy.reduce((sum, value) => sum + value, 0);

        if (!dx && !dy) {
            return;
        }

        sqrt = Math.sqrt(dx*dx + dy*dy);

        if (dx) {
            this.attr({x: this._parent.x - this.w/2 + 50*dx/sqrt});
        }

        if (dy) {
            this.attr({y: this._parent.y - this.h/2 + 50*dy/sqrt});
        }
    })
;
player.addHitbox(-10, -10, hitbox);


})();
