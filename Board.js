class Board{
    constructor (x, y, width, height) {
        var options = {
            isStatic: true
        };
        
        this.body = Bodies.rectangle(x, y, width, height, options);

        this.image = loadImage ("board.png")

        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display () {
        var pos = this.body.position;
        push ()
        imageMode (CENTER);
        image (this.image, pos.x, pos.y, width/8, height/6);
        pop ()
    }
}