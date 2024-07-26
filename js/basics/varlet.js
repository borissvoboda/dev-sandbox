let letItBe = 'Words of wisdom';

// var
if (true) {
  var a = 1;
  let b = 2;
  letItBe = 'Times of trouble';
  let loveMeDo = 'Someone like you';
}

for (var i = 0; i < 10; i++) {
  a = 3;
}

// console.log(a);
// console.log(b);

// letItBe was created in root, it is available inside
// the if statement AND outside.
console.log(letItBe);
// loveMeDo was created INSIDE if block, so it is local to that block
console.log(loveMeDo);

// LET is common sense: If I created a variable INSIDE some statement,
// it is only logical that I want it to exist it only in that statement/block/context.
// If I wanted it to be avail. globally, I would have created it in ROOT.
