var Ovaryaction = {};
var counter = 0;
Ovaryaction.Title = function (game) {
    this.startBG1;
};
Ovaryaction.Title.prototype = {
    preload: function () {
        this.load.image('start', 'ImageFolder/Start_Image.jpg');
        this.load.image('slide1', 'ImageFolder/slide1.jpg');
        this.load.image('slide2', 'ImageFolder/slide2.jpg');
        this.load.image('slide3', 'ImageFolder/slide3.jpg');
        // this.load.image('slide4', 'ImageFolder/slide4.jpg');
        this.load.image('slide4', 'ImageFolder/slide4.jpg');
        this.load.image('slide5', 'ImageFolder/slide5.jpg');
    },
    create: function () {
        this.input.maxPointers=1;
        this.stage.disableVisibilityChange = false;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.setScreenSize(true);
        this.input.addPointer();
        this.startBG1 = this.add.image(this.world.centerX-640, this.world.centerY-360, 'slide1'); //top left hand corner
        this.startBG1.inputEnabled = true;
        this.startBG1.events.onInputDown.add(this.nextState, this);
    },
    nextState: function (pointer) {
        // this.state.start('scene1');

        var slideList = ["slide1", "slide2", "slide3", "slide4", "slide5" ];
        
        this.startBG1 = this.add.image(this.world.centerX-640, this.world.centerY-360, slideList[counter]);
        counter++;

    }
};