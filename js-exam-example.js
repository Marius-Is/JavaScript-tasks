// 1. Sukurkite klasę Car, kuri turėtų savybes ir priskirtų jas naudojant konstruktorių:
//   brand,
//   model,
//   year,
//   color,
//   fuelTypes: [] 
//   price // eurais

class Car {
    constructor(brand, model, year, color, fuelTypes, price) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.color = color;
      this.fuelTypes = fuelTypes;
      this.price = price;
    }
    getFuelType() {
        return this.fuelTypes.join('/');
      }
  }
  

// 2. Sukurkite masyvą sudarytą iš 8 Car klasės mašinų

const cars = [
    new Car('Toyota', 'Corolla', 2020, 'white', ['diesel', 'electric'], 25000),
    new Car('Opel', 'Ascona', 1988, 'black', ['petrol', 'gas'], 1500),
    new Car('VW', 'Golf', 2000, 'silver', ['diesel'], 1000),
    new Car('Ford', 'Fiesta', 2014, 'red', ['petrol'], 5000),
    new Car('VW', 'Multivan', 2008, 'blue', ['diesel'], 14000),
    new Car('Tesla', 'Model S', 2019, 'green', ['electric'], 38000),
    new Car('Bugatti', 'Veyron', 2022, 'yellow', ['petrol'], 2500000),
    new Car('Subaru', 'Outback', 2006, 'orange', ['petrol'], 3500)
  ];
  

// 3. Klasėje Car sukurkite metodą getFuelType, kuris grąžintų mašinos kurų tipus (fuelTypes)
//    kaip 'string'ą atskirtą '/'.


//     getFuelType() {
//       return this.fuelTypes.join('/');
//     }
  

// 4. Atspausdinkite kiekvieno automobilio pavadinimą ir 3 punktu sukurto metodo rezultatą, pvz:
//   Tayota Corola - dysel/electric
//   Nisan Bajam - petrol/gas
//   Kanagi BaBa - uranus
//             ...

cars.forEach(car => {
    console.log(`${car.brand} ${car.model} - ${car.getFuelType()}`);
  });
  

// 5. Atrinkite tik elektrinius automobilius

const electricCars = cars.filter(car => car.fuelTypes.includes('electric'));


// 6. Atrinkite tik benzininius automobilius, naujesnius nei 2016 metai

const petrolCarsAfter2016 = cars.filter(car => car.fuelTypes.includes('petrol') && car.year > 2016);


// 7. Atrinkite audi tipo automobilius nuo 2012 iki 2016, kurie nėra dyzeliniai  

const nonDieselAudiCarsBetween2012And2016 = cars.filter(car => car.brand === 'Audi' && car.year >= 2012 && car.year <= 2016 && !car.fuelTypes.includes('diesel'));


// 8. Suskaičiuokite 5 punkte gautų automobilių kainos vidurkį

const electricCarsPrices = electricCars.map(car => car.price);
const averageElectricCarsPrice = electricCarsPrices.reduce((a, b) => a + b, 0) / electricCarsPrices.length;
console.log(averageElectricCarsPrice);


// 9. Suskaičiuokite 6 punkte gautų automobilių bendrą vertę

const totalValueOfPetrolCarsAfter2016 = petrolCarsAfter2016.reduce((total, car) => total + car.price, 0);
console.log(totalValueOfPetrolCarsAfter2016);


// 10. Panaudokite pradinį Car objektų masyvą performuoti duomenis į tokių objektų masyvą:
//   * brand,
//   * model,
//   * price, // kaina doleriais [Number]
//   * fuelType // kuro tipas kaip string'as. galite naudoti 3 punktu sukurtą metodą

const data = cars.map(car => ({
    brand: car.brand,
    model: car.model,
    price: car.price / 0.8, 
    fuelType: car.getFuelType()
  }));
  

