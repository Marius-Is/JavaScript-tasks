

// ------------------------------------ 1 Dalis ------------------------------------ 
console.log('Part-1.1------------------------------------------------------------')

// 1. Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų:
//   - name
//   - surname
//   - age
//   - height
//   - weight
//   - sex
const people = [
    {
      name: "Jonas",
      surname: "Ponas",
      age: 50,
      height: 180,
      weight: 80,
      sex: "male"
    },
    {
      name: "Jane",
      surname: "Klupiene",
      age: 25,
      height: 170,
      weight: 63,
      sex: "female"
    },
    {
        name: "Algis",
        surname: "Perkunas",
        age: 30,
        height: 213,
        weight: 110,
        sex: "male"
      },
      {
        name: "Elena",
        surname: "Spirgute",
        age: 21,
        height: 169,
        weight: 60,
        sex: "female"
      },
      {
        name: "Zydrunas",
        surname: "Pideriunas",
        age: 26,
        height: 171,
        weight: 61,
        sex: "male"
      },
      {
        name: "Aldona",
        surname: "Bobutiene",
        age: 105,
        height: 164,
        weight: 63,
        sex: "female"
      },
      {
        name: "Eugenijus",
        surname: "Pirdauskas",
        age: 40,
        height: 185,
        weight: 89,
        sex: "male"
      },
      {
        name: "Stase",
        surname: "Stervyte",
        age: 39,
        height: 160,
        weight: 90,
        sex: "female"
      },
  ];
console.log(people)
console.log('Part-1.2------------------------------------------------------------')
// 2. Panaudojant array.forEach:
//   - Atspausdinti kiekvieną elementą
//   - Atspausdinti kiekvieno elemento pilną vardą
//   - Atspausdinti kiekvieno elemento kūno masės indeksą

  people.forEach(person => {
    console.log(person);
    console.log(`${person.name} ${person.surname}`);
    console.log(getBMI(person.weight, person.height));
  });
  
  function getBMI(weight, height) {
    return weight / (height / 100) ** 2;
  }

  console.log('Part-1.3------------------------------------------------------------')
// 3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:
//   - kurių vardas ilgesnis nei 6 simboliai
//   - kurių svoris didesnis nei 80kg
//   - kurie aukštesni nei 185cm

const longNamePeople = people.filter(person => person.name.length > 6);
console.log(longNamePeople);

const heavyPeople = people.filter(person => person.weight > 80);
console.log(heavyPeople);

const tallPeople = people.filter(person => person.height > 185);
console.log(tallPeople);

console.log('Part-1.4------------------------------------------------------------')
// 4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti
//   - ūgius
//   - svorius
//   - ūgius, svorius ir amžius : [{height, weight, age}, ...]
//   - KMI indeksus
//   - KMI indeksus ir amžius

const heights = people.map(person => person.height);
console.log(heights);

const weights = people.map(person => person.weight);
console.log(weights);

const heightWeightAge = people.map(person => ({
  height: person.height,
  weight: person.weight,
  age: person.age
}));
console.log(heightWeightAge);

const BMIs = people.map(person => getBMI(person.weight, person.height));
console.log(BMIs);

const BMIsAge = people.map(person => ({
  BMI: getBMI(person.weight, person.height),
  age: person.age
}));
console.log(BMIsAge);

function getBMI(weight, height) {
  return weight / (height / 100) ** 2;
}

console.log('Part-1.5------------------------------------------------------------')
// 5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti
//   - svorių vidurkį
//   - ūgio vidurkį

const weightAverage = people.reduce((acc, person) => acc + person.weight, 0) / people.length;
console.log(weightAverage);

const heightAverage = people.reduce((acc, person) => acc + person.height, 0) / people.length;
console.log(heightAverage);




// ------------------------------------ 2 Dalis ------------------------------------ 
console.log('Part-2------------------------------------------------------------')

// 0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:
//     Person klasėje:    
//     - sukurti vidinį metodą: getBMI();     // suskaičiuoja kūno masės indeksą
//     - sukurti vidinį metodą: toString();   // atspausdina žmogų su esamom savybėm
class Person {
    constructor(name, surname, age, height, weight, sex) {
      this.name = name;
      this.surname = surname;
      this.age = age;
      this.height = height;
      this.weight = weight;
      this.sex = sex;
    }
  
    getBMI() {
      return this.weight / (this.height / 100) ** 2;
    }
  
    toString() {
      return `Name: ${this.name} ${this.surname}, Age: ${this.age}, Height: ${this.height}cm, Weight: ${this.weight}kg, Sex: ${this.sex}`;
    }
  }
  
//   const people = [
//     new Person("John", "Doe", 30, 180, 80, "male"),
//     new Person("Jane", "Doe", 25, 170, 60, "female"),
//     // ir t.t. iki 8 elementų
//   ];
  
//   const people = [];

//   for (let i = 0; i < 8; i++) {
//     people.push(new Person("John", "Doe", 30, 180, 80, "male"));
//   }
  
  
//   people.forEach(person => {
//     console.log(person.getBMI());
//     console.log(person.toString());
//   });
  

console.log('Part-2.1------------------------------------------------------------')

// 1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg 

const youngWomen = people.filter(person => person.sex === "female" && person.age < 20 && person.weight > 70);
console.log(youngWomen);


console.log('Part-2.2------------------------------------------------------------')

// 2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5

const men = people.filter(person => person.sex === "male" && person.age > 25 && person.getBMI() < 18.5);
console.log(men);


console.log('Part-2.3------------------------------------------------------------')

// 3. Atrinkti vaikus, su antsvoriu (KMI > 30)

const fatChildren = people.filter(person => person.age < 18 && person.getBMI() > 30);
console.log(fatChildren);


console.log('Part-2.4------------------------------------------------------------')

// 4. Atrinkti pensininkus, su antsvoriu (KMI > 30)

const pensioners = people.filter(person => person.age >= 65 && person.getBMI() > 30);
console.log(pensioners);


console.log('Part-2.5------------------------------------------------------------')

// 5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]

const peopleOutOfRange = people.filter(person => person.getBMI() < 18.5 || person.getBMI() > 25);
console.log(peopleOutOfRange);


// ------------------------------------ 3 Dalis -------------------------------------
// Peržiūrėti video: 
// https://www.youtube.com/watch?v=JaMCxVWtW58

// Geras Žaidimas pasitreniravimui:
//   https://www.typing.com/student/game/tommyq

// Rekomenduoju pasikartoti greitasias komandas

