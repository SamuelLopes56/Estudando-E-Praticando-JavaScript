const a1 = [10, 20, 30];
let total = 0;

a1.forEach(valor => {
  total += valor;
});

console.log(total);

const asd = {
  chave: 'hehe',
  chave2: 'haha'
};

const a = 'chave';
const b = 'chave2';

console.log(asd.chave);
console.log(asd.chave2);
console.log(asd['chave']);
console.log(asd['chave2']);
console.log(asd[a]);
console.log(asd[b]);

for (let x in asd) {
  console.log('---------------')
  console.log(asd[x]); // Isso asd[hehe] é o mesmo que isso asd['chave'] e asd['chave2']
  console.log(asd);
  console.log(x);
}