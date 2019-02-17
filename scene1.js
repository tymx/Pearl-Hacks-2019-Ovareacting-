Ovaryaction.Scene1 = function (game) {
    this.startBG;
};

Ovaryaction.Scene1.prototype = {
    preload: function () {

    },
    create: function () {
        this.startBG = this.add.image(this.world.centerX-50, this.world.centerY-100, 'start'); //top left hand corner
        this.startBG.inputEnabled = true;
        this.startBG.events.onInputDown.add(this.nextState, this);
    },
    nextState: function (pointer) {
        this.state.start('title');
    }
}