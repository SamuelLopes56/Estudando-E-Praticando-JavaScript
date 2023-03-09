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

console.log(asd.chave2);

for (let hehe in asd) {
  console.log('---------------')
  console.log(asd[hehe]);
  console.log(asd);
  console.log(hehe);
}