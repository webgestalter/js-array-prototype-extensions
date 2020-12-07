////////// Calculation / Mathematics

Array.prototype.sum = function(){ var total = 0; for ( var i = 0; i < this.length; i++ ) { total += this[i]; } return total; };

// get the average of all number values in array
Array.prototype.average = function(){ return this.sum() / this.length; };

// Get the Range (min & max) of all Values
Array.prototype.range = function(){ var self = this.sort(); return { min: self[0], max: self[this.length-1] } };

////////// Selection

// get the first element of the array
Array.prototype.first = function(){ return this[0]; };

// get the  last element of the array
Array.prototype.last = function(){ return this[ this.length - 1 ]; };

////////// Others

Array.prototype.shuffle = function(){

  let self = this;

  for ( let i = self.length - 1; i > 0; i-- ) {
    const j = Math.floor( Math.random() * (i + 1) );
    [self[i], self[j]] = [self[j], self[i]];
  }

  return self;

}

