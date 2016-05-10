(function () {
'use strict';

Crafty.c('Hitbox', {
    init: function () {
        this.requires('2D');
    }
});

Crafty.c('Player', {
    boundingBox: null,
    init: function () {
        this.requires('2D,Mouse');

        this.center(0, 0);

        this.bind('EnterFrame', function () {
            var dx, dy;

            if (Crafty.lastEvent) {
                dx = this.x;
                dy = this.y;

                this.center(
                    Crafty.lastEvent.realX,
                    Crafty.lastEvent.realY
                );

                dx = this.x - dx;
                dy = this.y - dy;

                Crafty.trigger.call(this, 'PlayerMove', {
                    dx: dx,
                    dy: dy
                });
            }
        });
    },
    center: function (x, y) {
        this.attr({
            x: x,
            y: y
        });

        return this;
    },
    addHitbox: function (relativeX, relativeY, hitbox) {
        if (!hitbox.has('Hitbox')) {
            throw 'Attaching non-hitbox to player'
        }
        this.attach(hitbox);

        hitbox.attr({
            x: this.x + relativeX,
            y: this.y + relativeY
        });

        return this;
    }
});

})();

