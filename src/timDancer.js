var TimDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('tim')
};

TimDancer.prototype = Object.create(Dancer.prototype);
TimDancer.prototype.constructor = TimDancer;

TimDancer.prototype.step = function(){
  // call the old version of step at the beginning
  // of any call to this new version of step
  //
  Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //
  //this.$node.toggle();
};

TimDancer.prototype.lineUp = function(){
  Dancer.prototype.lineUp.call(this, 'bottom', '10px');
};
