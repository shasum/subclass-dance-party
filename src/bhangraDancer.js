var BhangraDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('baby')

};

BhangraDancer.prototype = Object.create(Dancer.prototype);
BhangraDancer.prototype.constructor = BhangraDancer;


BhangraDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('bhangra');
};
