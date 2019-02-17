var Ovaryaction = {};
var counter = 0;
Ovaryaction.Title = function (game) {
    this.startBG1;
};
Ovaryaction.Title.prototype = {
    preload: function () {
        this.load.image('slide1', 'ImageFolder/slide1.jpg');
        this.load.image('slide1A', 'ImageFolder/Slide1A.jpg')
        this.load.image('slide2A', 'ImageFolder/Slide2A.jpg');
        this.load.image('slide1B', 'ImageFolder/Slide1B.jpg');
        this.load.image('slide3A', 'ImageFolder/Slide3A.jpg');
        this.load.image('slide4A', 'ImageFolder/Slide4A.jpg');
        this.load.image('slide5A', 'ImageFolder/Slide5A.jpg');
        this.load.image('slide6A', 'ImageFolder/Slide6A.jpg');
        this.load.image('slide6B', 'ImageFolder/Slide6B.jpg');
        this.load.image('slide7A', 'ImageFolder/Slide7A.jpg');
        this.load.image('slide8A','ImageFolder/Slide8A.jpg');
        this.load.image('slide8B', 'ImageFolder/Slide8B.jpg');
        this.load.image('slide9A', 'ImageFolder/Slide9A.jpg');
        this.load.image('slide10A', 'ImageFolder/Slide10A.jpg');
        this.load.image('slide11A', 'ImageFolder/Slide11A.jpg');
        this.load.image('slide11B', 'ImageFolder/Slide11B.jpg');
        this.load.image('slide12', 'ImageFolder/Slide12.jpg');
        this.load.image('slide12A', 'ImageFolder/Slide12A.jpg');
        this.load.image('slide12B', 'ImageFolder/Slide12B.jpg');
        this.load.image('slide12C', 'ImageFolder/Slide12C.jpg');
        this.load.image('slide13A', 'ImageFolder/Slide13A.jpg');
        this.load.image('slide13B', 'ImageFolder/Slide13B.jpg');
        this.load.image('slide13C', 'ImageFolder/Slide13C.jpg');
        this.load.image('slide13D', 'ImageFolder/Slide13D.jpg');
        this.load.image('slide13F', 'ImageFolder/Slide13F.jpg');
        this.load.image('slide14A', 'ImageFolder/Slide14A.jpg');
        this.load.image('slide14B', 'ImageFolder/Slide14B.jpg');
        this.load.image('slide14C', 'ImageFolder/Slide14C.jpg');
        this.load.image('end', 'ImageFolder/End.jpg');

        
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

        var slideList = ["slide1", "slide1A", "slide1B", "slide2A", "slide3A", "slide4A", "slide5A", "slide6A", "slide6B", "slide7A",
        "slide8A", "slide8B", "slide9A", "slide10A", "slide11A", "slide11B","slide12","slide12A", "slide12B", "slide12C", "slide13A", "slide13B", "slide13C", "slide13D", "slide13F",
        "slide14A", "slide14B", "slide14C", "end"];
        
        this.startBG1 = this.add.image(this.world.centerX-640, this.world.centerY-360, slideList[counter]);
        counter++;

    }
};