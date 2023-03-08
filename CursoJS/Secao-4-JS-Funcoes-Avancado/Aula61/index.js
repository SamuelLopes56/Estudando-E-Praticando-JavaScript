function* geradora1() {
    // Código qualquer ...
    yield 'Valor 1';
    // Código qualquer ...
    yield 'Valor 2';
    // Código qualquer ...
    yield 'Valor 3';
  }
  
  function* geradora2() {
    let i = 0;
  
    while(true) {
      yield i;
      i++;
    }
  }
  
  function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
  }
  
  function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
  }
  
  const g4 = geradora4();
  
  function* geradora5() {
    yield function() {
      console.log('Vim do y1');
    };

    yield function(){
        console.log('Vim do y2');
    }
  
    return function() { // O return faz com que a função geradora termine logo após ele. Todo código após o return não é usado.
      console.log('Vim do return');
    };
  
    // ...
  
    yield function() { // Esse yield não vai ser usado pois está abaixo do return (que vai encerrar a função geradora).
      console.log('Vim do y3');
    };
  }
  
  const g5 = geradora5();
  const func1 = g5.next().value;
  const func2 = g5.next().value;
  const func3 = g5.next().value;
  
  func1();
  func2();
  func3();