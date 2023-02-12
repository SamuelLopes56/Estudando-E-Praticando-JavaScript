
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    console.log(r)
    return Math.floor(r);
  }

  // Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  // Math.floor(Math.random() * (max - min + 1) + min);

  /*
  function random(min, max) {
    const r = Math.random() * (max - min + 1) + min;
    return Math.floor(r);
  }
  */
  
  const min = 1;
  const max = 50;
  // let rand = 10;
  let rand = random(min, max);

  while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
  }
  console.log('######');
  rand = random(min, max);
  
  do {
    console.log(rand);
    rand = random(min, max);
  } while(rand !== 10);

  console.log('######');
  console.log(rand);
