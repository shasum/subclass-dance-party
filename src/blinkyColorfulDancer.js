var BlinkyColorfulDancer = function(top, left, timeBetweenSteps){

  BlinkyDancer.call(this, top, left, timeBetweenSteps);

};

BlinkyColorfulDancer.prototype = Object.create(BlinkyDancer.prototype);
BlinkyColorfulDancer.prototype.constructor = BlinkyColorfulDancer;

BlinkyColorfulDancer.prototype.step = function(){
  // call the old version of step at the beginning
  // of any call to this new version of step
  //
  BlinkyDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //
  this.$node.css({'border-color': '#'+Math.floor(Math.random()*16777215).toString(16)});

  //this.$node.toggleClass('bhangra');
};
