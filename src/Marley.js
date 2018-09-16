PrinceJS.Marley = function (game, level, location, direction, room) {

    this.level = level;
    this.room = room;
    this.excitement = 0;
    this.coming = false;
    
    this.charBlockX = location % 10;
    this.charBlockY = Math.floor( location / 10);
    
    var x = PrinceJS.Utils.convertBlockXtoX(this.charBlockX) - 30;
    var y = PrinceJS.Utils.convertBlockYtoY(this.charBlockY) - 9;

    PrinceJS.Actor.call(this, game, x, y, direction, 'marley', 'marley');

    this.charXVel = 0;
    this.charYVel = 0;
    this.actionCode = 1;
	this.anchor.setTo(.5,.5);
    this.scale.x *= -1;
            
    this.baseX = this.level.rooms[this.room].x * PrinceJS.ROOM_WIDTH;
    this.baseY = this.level.rooms[this.room].y * PrinceJS.ROOM_HEIGHT + 3;

};

PrinceJS.Marley.GRAVITY = 3;
PrinceJS.Marley.TOP_SPEED = 33;

PrinceJS.Marley.prototype = Object.create(PrinceJS.Actor.prototype);
PrinceJS.Marley.prototype.constructor = PrinceJS.Marley;

PrinceJS.Marley.prototype.comehere = function() {

	if (!this.coming) {
		console.log('excitement', this.excitement);
		this.coming = true;
		if (this.excitement < 1) {
			this.action = 'walk';
		} else {
			this.action = 'run';		
		}
		console.log('increasing excitement');
		this.excitement += 1;
	}
};

PrinceJS.Marley.prototype.turn = function() {
    
    this.action = 'turn';
	this.excitement = 0;
    
};

PrinceJS.Marley.prototype.stop = function() {
    
    this.action = 'stand';
    this.coming = false;
    
};
