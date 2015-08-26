var MoonWalk = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('moonwalk');
  this.moveIncrement = 50;
  // this.animate();
};

MoonWalk.prototype = Object.create(Dancer.prototype);
MoonWalk.prototype.constructor = MoonWalk;


MoonWalk.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.animate();
};


MoonWalk.prototype.animate = function(){
    var newq = {};
    var oldq = this.$node.offset();
    console.log('top = ', oldq.top, 'left = ', oldq.left);
   // newq.top = Math.random() < 0.5 ? oldq.top - Math.floor(Math.random() * this.moveIncrement)  : oldq.top +Math.floor(Math.random() * this.moveIncrement);
    newq.left = Math.random() < 0.5 ? oldq.left - Math.floor(Math.random() * this.moveIncrement)  : oldq.left +Math.floor(Math.random() * this.moveIncrement);

    this.$node.css({ top: newq.top, left: newq.left });
};

MoonWalk.prototype.makeNewPosition = function(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

};

/*
MoonWalk.prototype.animate = function(){
    var newq = this.makeNewPosition();
    var oldq = this.$node.offset();
    var speed = this.calcSpeed([oldq.top, oldq.left], newq);

    this.$node.animate({ top: newq[0], left: newq[1] }, speed, function(){
      this.animate();
    }.bind(this));
};

MoonWalk.prototype.makeNewPosition = function(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

};

MoonWalk.prototype.calcSpeed = function(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 1.0;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

};
*/
