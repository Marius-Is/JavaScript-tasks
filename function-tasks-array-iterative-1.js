const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
  // ...sprendimas ir spausdinimas
 for (const person of people) {
  console.log(person.name + " " + person.surname + " is a " + person.age + " year old " + person.sex + " who makes $" + person.income + " per month.");
}

}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių varus ir pavardes, atskirtus brūkšneliu');
{
  // ...sprendimas ir spausdinimas
  for (const person of people) {
    console.log(person.name + "-" + person.surname);
  }
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
  // ...sprendimas ir spausdinimas
  for (const person of people) {
    console.log(person.name + " " + person.surname + " is married: " + person.married);
  }
  
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  // ...sprendimas ir spausdinimas

  // for (const person of people) {
  //   console.log("sex: "+ person.sex + "; income: "+ person.income);
  // }

const genderAndIncome = [];

for (const person of people) {
  genderAndIncome.push({
    gender: person.sex,
    income: person.income
  });
}

console.log(genderAndIncome);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  // ...sprendimas ir spausdinimas
  const nameSurnameSex = [];

for (const person of people) {
  nameSurnameSex.push({
    name: person.name,
    surname: person.surname,
    gender: person.sex,
  });
}

console.log(nameSurnameSex);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  // ...sprendimas ir spausdinimas
  for (const person of people) {
    if (person.sex === 'male'){
    console.log(person.name + " " + person.surname + " is a " + person.age + " year old " + person.sex + " who makes $" + person.income + " per month.");}
  }
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  // ...sprendimas ir spausdinimas
  for (const person of people) {
    if (person.sex === 'female'){
    console.log(person.name + " " + person.surname + " is a " + person.age + " year old " + person.sex + " who makes $" + person.income + " per month.");}
  }
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  // ...sprendimas ir spausdinimas
  for (const person of people) {
    if (person.hasCar === true){
    console.log(person.name + " " + person.surname);}
  }
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  // ...sprendimas ir spausdinimas
  for (const person of people) {
    if (person.married === true){
    console.log(person.name + " " + person.surname + " is a " + person.age + " year old " + person.sex + " who makes $" + person.income + " per month.");}
  }
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  // ...sprendimas ir spausdinimas
  const drivingCount = {
    male: 0,
    female: 0
  };
  
  for (const person of people) {
    if (person.hasCar) {
      if (person.sex === 'male') {
        drivingCount.male += 1;
      } else {
        drivingCount.female += 1;
      }
    }
  }
  
  console.log(drivingCount);
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  // ...sprendimas ir spausdinimas
  for (const person of people) {
    person.salary = person.income;
    delete person.income;
  }
  
  console.log(people);
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės');
{
  // ...sprendimas ir spausdinimas
  const peopleWithoutNameAndGender = [];

for (const person of people) {
  peopleWithoutNameAndGender.push({
    age: person.age,
    income: person.income,
    married: person.married,
    hasCar: person.hasCar
  });
}

console.log(peopleWithoutNameAndGender);
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  // ...sprendimas ir spausdinimas
  const peopleWithFullName = [];

for (const person of people) {
  peopleWithFullName.push({
    fullname: person.name + " " + person.surname,
    sex: person.sex,
    age: person.age,
    income: person.income,
    married: person.married,
    hasCar: person.hasCar
  });
}

console.log(peopleWithFullName);
}
console.groupEnd();

