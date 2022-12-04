
// 1. Sukurti klasę Automobilis
//   - sukurti konstruktorių, su 3 argumentais:
//     - marke, modelis, kaina

//   - konstruktoriuje aprašyti, jog perduotus argumentus išsaugotume formuojame objekte savybėmis:
//     - this.brand
//     - this.model
//     - this.price

class Automobilis {
  constructor(marke, modelis, kaina) {
    this.brand = marke;
    this.model = modelis;
    this.price = kaina;
  }
}

// 2. Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose:
//   - const car1 = new Automobilis(..., ..., ...);
//   - const car2 = new Automobilis(..., ..., ...);
//   - const car3 = new Automobilis(..., ..., ...);

const car1 = new Automobilis("Ford", "Fiesta", 10000);
const car2 = new Automobilis("BMW", "X5", 50000);
const car3 = new Automobilis("Audi", "A3", 20000);

// 3. Atsispausdinkite car1, car2 ir car3 kintamuosius. Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai

console.log(car1);
console.log(car2);
console.log(car3);


// 4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus):
//   modelius:
//     - console.log(car1.model);
//     - console.log(car2.model);
//     - console.log(car3.model);

console.log(car1.model);
console.log(car2.model);
console.log(car3.model);

//   markes:
//     - console.log(car1.brand);
//     - console.log(car2.???);
//     - console.log(???);

console.log(car1.brand);
console.log(car2.brand);
console.log(car3.brand);

//   kainas:
//     - console.log(???);
//     - console.log(???);
//     - console.log(???);

console.log(car1.price);
console.log(car2.price);
console.log(car3.price);


// 5. Padidinkite Automobilis objektų kainas šimtu.
//   car1.price = car1.price + 100;
//   car2.price = ??? + 100;
//   ???

car1.price += 100;
car2.price += 100;
car3.price += 100;


// 6. Po padidinimo, vėl atsispausdinkite objektus ir pažiūrėkite pakitusias Automobilis objektų savybes.

console.log(car1);
console.log(car2);
console.log(car3);

