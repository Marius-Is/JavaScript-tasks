const masyvas=[10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  function getFirstNumber(arr){
    return arr[0];
  }
  console.log(getFirstNumber(masyvas));
} 
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
function removeFirstElement(arr) {
  let firstElement =arr[0];
  arr.shift();
  return firstElement;
}
console.log(removeFirstElement(masyvas));
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  function getLastElement(arr) {
    return arr[arr.length - 1];
  }
  console.log(getLastElement(masyvas));
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  function removeLastElement(arr) {
    let lastElement = arr[arr.length - 1];
    arr.pop();
    return lastElement;
  }
  console.log(removeLastElement(masyvas));
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
function getArrayLength(array) {
  return array.length;
}
const masyvas=[10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const arrayLength = getArrayLength(masyvas);
console.log(arrayLength);
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
function printLastElementIndex(array) {
  return array.length - 1;
}
const masyvas=[10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const lastElementIndex = printLastElementIndex(masyvas);
console.log(lastElementIndex);
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
function printElementIndices(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(i);
  }
}
const masyvas = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
printElementIndices(masyvas);
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
function printElementValues(array) {
  for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
  }
}
const masyvas = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
printElementValues(masyvas);
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  function printElementValuesAndIndices(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`[${i}] => ${array[i]}`);
    }
  }
  const masyvas = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
printElementValuesAndIndices(masyvas);
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  function printArrayElementsInReverse(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      console.log(array[i]);
    }
  }
const masyvas = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
printArrayElementsInReverse(masyvas);
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  // ...sprendimas ir spausdinimas
  function printElementIndices(array) {
    const indices = [];
    for (let i = 0; i < array.length; i++) {
      indices.push(i);
    }
    return indices;
  }
  const masyvas = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const indices = printElementIndices(masyvas);
  console.log(indices); 
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  // ...sprendimas ir spausdinimas
  function printElementValues(array) {
    const values = [];
    for (let i = 0; i < array.length; i++) {
      values.push(array[i]);
    }
    return values;
  }
const masyvas = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const values = printElementValues(masyvas);
console.log(values);
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  // ...sprendimas ir spausdinimas
  function printElementValuesAndIndices(array) {
    const valuesAndIndices = [];
    for (let i = 0; i < array.length; i++) {
      valuesAndIndices.push(`[${i}] => ${array[i]}`);
    }
    return valuesAndIndices;
  }
const masyvas = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const valuesAndIndices = printElementValuesAndIndices(masyvas);
console.log(valuesAndIndices);
}
console.groupEnd();
