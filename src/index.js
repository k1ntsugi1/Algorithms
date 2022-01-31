import readlineSync from 'readline-sync';

function getMas() {
  const mas = [];
  const lengthOfmas = Number(readlineSync.question('Print length of massive: '));
  for (let i = 0; i < lengthOfmas; i += 1) {
    const getElement = `Print ${i} element of massive: `;
    const element = Number(readlineSync.question(getElement));
    mas.push(element);
  }
  return mas;
}

export default getMas;
