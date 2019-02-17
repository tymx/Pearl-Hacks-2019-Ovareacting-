var Ovaryaction = {};
Ovaryaction.Title = function (game) {
    this.startBG1;
};
Ovaryaction.Title.prototype = {
    preload: function () {
        this.load.image('start', 'ImageFolder/Start_Image.jpg');

    },
    create: function () {
        this.input.maxPointers=1;
        this.stage.disableVisibilityChange = false;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.setScreenSize(true);
        this.input.addPointer();
        this.startBG1 = this.add.image(this.world.centerX-100, this.world.centerY-120, 'start'); //top left hand corner
        this.startBG1.inputEnabled = true;
        this.startBG1.events.onInputDown.add(this.nextState, this);
    },
    nextState: function (pointer) {
        this.state.start('scene1');
    }
};