/*
  Užduotis reikia atlikti 2 kartus
    * su while ciklu
    * su for ciklu
*/ 

const numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

console.groupCollapsed('WHILE');
{
  console.groupCollapsed('1. Sukurkite ciklą kuris 5 kartus atspausdintų "Sveikas Pasauli"');
  {
    let x=5
    while (x>0) {
      console.log('Sveikas Pasauli');
      x--;
    }

  }
  console.groupEnd();
  console.groupCollapsed('2. Sukurkite ciklą kuris atspausdintų nuo 1 iki 5. Naudojant <');
  {
    let x=1
    while (x<6) {
      console.log(x)
      x++
    }
  }
  console.groupEnd();
  console.groupCollapsed('3. Sukurkite ciklą kuris atspausdintų nuo 3 iki 7. Naudojant <');
  {
    let x=3
    while (x<8) {
      console.log(x);
      x++;
    }
  }
  console.groupEnd();
  console.groupCollapsed('4. Sukurkite ciklą kuris atspausdintų nuo -3 iki 2. Naudojant <');
  {
    let x=-3
    while (x<3) {
      console.log(x);
      x++;
    }
  }
  console.groupEnd();
  console.groupCollapsed('5. Sukurkite ciklą kuris atspausdintų nuo 1 iki 5. Naudojant <=');
  {
    let x=1
    while (x<=5) {
      console.log(x);
      x++;
    }
  }
  console.groupEnd();
  console.groupCollapsed('6. Sukurkite ciklą kuris atspausdintų nuo 3 iki 7. Naudojant <=');
  {
    let x=3
    while (x<=7) {
      console.log(x);
      x++;
    }
  }
  console.groupEnd();
  console.groupCollapsed('7. Sukurkite ciklą kuris atspausdintų nuo -3 iki 2. Naudojant <=');
  {
    let x=-3
    while (x<=2) {
      console.log(x);
      x++;
    }
  }
  console.groupEnd();
  console.groupCollapsed('8. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki -3. Naudojant >');
  {
    let x=2
    while (x>-4) {
      console.log(x);
      x--;
    }
  }
  console.groupEnd();
  console.groupCollapsed('9. Sukurkite ciklą kuris atspausdintų nuo -5 iki iki -10. Naudojant >');
  {
    let x=-5
    while (x>-11) {
      console.log(x);
      x--;
    }
  }
  console.groupEnd();
  console.groupCollapsed('10. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki 1. Naudojant >');
  {
    let x=2
    while (x>0) {
      console.log(x);
      x--;
    }
  }
  console.groupEnd();
  console.groupCollapsed('11. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki -3. Naudojant >=');
  {
    let x=2
    while (x>=-3) {
      console.log(x);
      x--;
    }
  }
  console.groupEnd();
  console.groupCollapsed('12. Sukurkite ciklą kuris atspausdintų nuo -5 iki iki -10. Naudojant >=');
  {
    let x=-5
    while (x>=-10) {
      console.log(x);
      x--;
    }
  }
  console.groupEnd();
  console.groupCollapsed('13. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki 1. Naudojant >=');
  {
    let x=2
    while (x>=1) {
      console.log(x);
      x--;
    }
  }
  console.groupEnd();
  console.groupCollapsed('14. Sukurkite ciklą kuris atspausdintų 2, 4, 6, 8, 10. Naudojant žingsnį +2');
  {
    let x=2
    while (x<=10) {
      console.log(x);
      x+=2
    }
  }
  console.groupEnd();
  console.groupCollapsed('15. Sukurkite ciklą kuris atspausdintų 2, 4, 6, 8, 10. Tikrinant ar kintamasis yra lyginis. Naudokite liekanos operatorių');
  {
    let x=2
    if (x % 2 == 0)
    while (x<=10) {
      console.log(x);
      x+=2
    }
  }
  console.groupEnd();
  console.groupCollapsed('16. Sukurkite ciklą kuris atspausdintų 4, 1, -2, -5, -8. Naudojant žingsnį -3');
  {
    let x=4
    while (x>=-8) {
      console.log(x);
      x+=-3
    }
  }
  console.groupEnd();
  console.groupCollapsed('17. Sukurkite ciklą kuris atspausdintų 3, 0, -3, -6, -9. Tikrinant ar kintamojo liekana dalinant iš 3 yra lygi 0?');
  {
    let x=3
    if (x % 3==0)
    while (x>=-9) {
      console.log(x);
      x+=-3
    }
  }
  console.groupEnd();
  console.groupCollapsed('18. Sukurkite ciklą kuris atspausdintų 2, 0, -2, -4, -6. Naudojant kintamojo liekaną');
  {
    let x=2
    if (x % 2==0)
    while (x>=-6) {
      console.log(x);
      x+=-2
    }
  }
  console.groupEnd();
  console.groupCollapsed('19. Sukurkite ciklą kuris atspausdintų 2, -1, -4, -7, -10. Naudojant kintamojo liekaną');
  {
    let i = 0;
    let num = 2;

  while (i < 5) {
  console.log(num);
  i++;
  num = num - i * 3;
}
  }
  console.groupEnd();
  console.groupCollapsed('20. Atspausdinkite <numbers> masyvo elementus nuo pirmo iki paskutinio');
  {
    let i = 0;

    while (i < numbers.length) {
      console.log(numbers[i]);
      i++;
    }
  }
  console.groupEnd();
  console.groupCollapsed('21. Atspausdinkite <numbers> masyvo elementus nuo 3 iki paskutinio');
  {
  let i = 2;

  while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}
  }
  console.groupEnd();
  console.groupCollapsed('22. Atspausdinkite <numbers> masyvo elementus nuo 2 iki prieš paskutinio');
  {
    let i = 1;

    while (i < numbers.length - 1) {
      console.log(numbers[i]);
      i++;
    }
  }
  console.groupEnd();
  console.groupCollapsed('23. Atspausdinkite <numbers> masyvo elementus nuo paskutinio iki pirmo');
  {
    let i = numbers.length - 1;

    while (i >= 0) {
      console.log(numbers[i]);
      i--;
    }
  }
  console.groupEnd();
  console.groupCollapsed('24. Atspausdinkite <numbers> masyvo elementus nuo paskutinio iki antro');
  {
    let i = numbers.length - 1;

    while (i > 1) {
      console.log(numbers[i]);
      i--;
    }
  }
  console.groupEnd();
  console.groupCollapsed('25. Atspausdinkite <numbers> masyvo elementus nuo prieš paskutinio iki trečio');
  {
    let i = numbers.length - 2;

    while (i > 2) {
      console.log(numbers[i]);
      i--;
    }
  }
  console.groupEnd();
  console.groupCollapsed('26. Atspausdinkite <numbers> masyvo kas antrą elementą iš kairės į dešinę');
  {
    let i = 0;

    while (i < numbers.length) {
      console.log(numbers[i]);
      i += 2;
    }
  }
  console.groupEnd();
  console.groupCollapsed('27. Atspausdinkite <numbers> masyvo kas trečią elementą iš kairės į dešinę');
  {
    let i = 0;

    while (i < numbers.length) {
      console.log(numbers[i]);
      i += 3;
    }
  }
  console.groupEnd();
  console.groupCollapsed('28. Atspausdinkite <numbers> masyvo kas antrą elementą iš kairės į dešinę, pradedant trečiu');
  {
    let i = 2;

    while (i < numbers.length) {
      console.log(numbers[i]);
      i += 2;
    }
    
  }
  console.groupEnd();
  console.groupCollapsed('29. Atspausdinkite <numbers> masyvo kas antrą elementą iš dešinės');
  {
    let i = 2;

    while (i < numbers.length) {
      console.log(numbers[i]);
      i += 2;
    }
  }
  console.groupEnd();
  console.groupCollapsed('30. Atspausdinkite <numbers> masyvo kas trečią elementą iš dešinės');
  {
    let i = numbers.length - 1;

    while (i >= 0) {
      console.log(numbers[i]);
      i -= 3;
    }
    
  }
  console.groupEnd();
  console.groupCollapsed('31. Atspausdinkite <numbers> masyvo kas antrą elementą iš dešinės, pradedant prieš prieš paskutiniu');
  {
    let i = numbers.length - 2;

    while (i >= 0) {
      console.log(numbers[i]);
      i -= 2;
    }    
  }
  console.groupEnd();
}
console.groupEnd();

console.groupCollapsed('FOR');
{
  console.groupCollapsed('1. Sukurkite ciklą kuris 5 kartus atspausdintų "Sveikas Pasauli"');
  {
    for(let x=0; x<5; x++) {console.log('Sveikas Pasauli')}; 
  }
  console.groupEnd();
  console.groupCollapsed('2. Sukurkite ciklą kuris atspausdintų nuo 1 iki 5. Naudojant <');
  {
    for(let x=1; x<=5; x++) {console.log(x)}; 

  }
  console.groupEnd();
  console.groupCollapsed('3. Sukurkite ciklą kuris atspausdintų nuo 3 iki 7. Naudojant <');
  {
    for(let x=3; x<8; x++) {console.log(x)}; 
  }
  console.groupEnd();
  console.groupCollapsed('4. Sukurkite ciklą kuris atspausdintų nuo -3 iki 2. Naudojant <');
  {
    for(let x=-3; x<3; x++) {console.log(x)}; 
  }
  console.groupEnd();
  console.groupCollapsed('5. Sukurkite ciklą kuris atspausdintų nuo 1 iki 5. Naudojant <=');
  {
    for(let x=1; x<5; x++) {console.log(x)}; 
  }
  console.groupEnd();
  console.groupCollapsed('6. Sukurkite ciklą kuris atspausdintų nuo 3 iki 7. Naudojant <=');
  {
    for(let x=3; x<7; x++) {console.log(x)}; 
  }
  console.groupEnd();
  console.groupCollapsed('7. Sukurkite ciklą kuris atspausdintų nuo -3 iki 2. Naudojant <=');
  {
    for(let x=-3; x<2; x++) {console.log(x)}; 
  }
  console.groupEnd();
  console.groupCollapsed('8. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki -3. Naudojant >');
  {
    for(let x=2; x>-4; x--) {console.log(x)}; 
  }
  console.groupEnd();
  console.groupCollapsed('9. Sukurkite ciklą kuris atspausdintų nuo -5 iki iki -10. Naudojant >');
  {
    for(let x=-5; x>-11; x--) {console.log(x)}; 
  }
  console.groupEnd();
  console.groupCollapsed('10. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki 1. Naudojant >');
  {
    for(let x=2; x>0; x--) {console.log(x)}; 
  }
  console.groupEnd();
  console.groupCollapsed('11. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki -3. Naudojant >=');
  {
    for(let x=2; x>=-3; x--) {console.log(x)}; 
  }
  console.groupEnd();
  console.groupCollapsed('12. Sukurkite ciklą kuris atspausdintų nuo -5 iki iki -10. Naudojant >=');
  {
    for(let x=-5; x>=-10; x--) {console.log(x)}; 
  }
  console.groupEnd();
  console.groupCollapsed('13. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki 1. Naudojant >=');
  {
    for(let x=2; x>=1; x--) {console.log(x)}; 
  }
  console.groupEnd();
  console.groupCollapsed('14. Sukurkite ciklą kuris atspausdintų 2, 4, 6, 8, 10. Naudojant žingsnį +2');
  {
    for(let x=2; x<=10; x+=2) {console.log(x)}; 
  }
  console.groupEnd();
  console.groupCollapsed('15. Sukurkite ciklą kuris atspausdintų 2, 4, 6, 8, 10. Tikrinant ar kintamasis yra lyginis. Naudokite liekanos operatorių');
  {
    
    for(let x=2; x<=10; x+=2) if (x % 2 == 0) {console.log(x)}; 
  }
  console.groupEnd();
  console.groupCollapsed('16. Sukurkite ciklą kuris atspausdintų 4, 1, -2, -5, -8. Naudojant žingsnį -3');
  {
    for(let x=4; x>=-8; x-=3) {console.log(x)}; 
  }
  console.groupEnd();
  console.groupCollapsed('17. Sukurkite ciklą kuris atspausdintų 3, 0, -3, -6, -9. Tikrinant ar kintamojo liekana dalinant iš 3 yra lygi 0?');
  {
    for(let x=3; x>=-9; x+=-3) if (x % 3 == 0) {console.log(x)}; 
  }
  console.groupEnd();
  console.groupCollapsed('18. Sukurkite ciklą kuris atspausdintų 2, 0, -2, -4, -6. Naudojant kintamojo liekaną');
  {
    for (let i = 0; i < 5; i++) {
      if (i % 2 === 0) {
        console.log(2 * i);
      } else {
        console.log(-2 * i);
      }
    }

  }
  console.groupEnd();
  console.groupCollapsed('19. Sukurkite ciklą kuris atspausdintų 2, -1, -4, -7, -10. Naudojant kintamojo liekaną');
  {
    for (let i = 0; i < 5; i++) {
      if (i % 2 === 0) {
        console.log(2 - i);
      } else {
        console.log(-1 - 3 * i);
      }
    }

  }
  console.groupEnd();
  console.groupCollapsed('20. Atspausdinkite <numbers> masyvo elementus nuo pirmo iki paskutinio');
  {
    for (let i=0; i<numbers.length; i++){console.log(numbers[i])}
    
  }
  console.groupEnd();
  console.groupCollapsed('21. Atspausdinkite <numbers> masyvo elementus nuo 3 iki paskutinio');
  {
    for (let i=3; i<numbers.length; i++){console.log(numbers[i])}

  }
  console.groupEnd();
  console.groupCollapsed('22. Atspausdinkite <numbers> masyvo elementus nuo 2 iki prieš paskutinio');
  {
    for (let i=1; i<numbers.length-1; i++){console.log(numbers[i])}

  }
  console.groupEnd();
  console.groupCollapsed('23. Atspausdinkite <numbers> masyvo elementus nuo paskutinio iki pirmo');
  {
    for (let i=numbers.length; i>=0; i--){console.log(numbers[i])}
  }
  console.groupEnd();
  console.groupCollapsed('24. Atspausdinkite <numbers> masyvo elementus nuo paskutinio iki antro');
  {
    for (let i=numbers.length-1; i>0; i--){console.log(numbers[i])}
  }
  console.groupEnd();
  console.groupCollapsed('25. Atspausdinkite <numbers> masyvo elementus nuo prieš paskutinio iki trečio');
  {
    for (let i=numbers.length-2; i>1; i--){console.log(numbers[i])}
  }
  console.groupEnd();
  console.groupCollapsed('26. Atspausdinkite <numbers> masyvo kas antrą elementą iš kairės į dešinę');
  {
    for (let i = 0; i < numbers.length; i += 2) {
      console.log(numbers[i]);
    }
  }
  console.groupEnd();
  console.groupCollapsed('27. Atspausdinkite <numbers> masyvo kas trečią elementą iš kairės į dešinę');
  {
    for (let i = 0; i < numbers.length; i += 3) {
      console.log(numbers[i]);
    }
  }
  console.groupEnd();
  console.groupCollapsed('28. Atspausdinkite <numbers> masyvo kas antrą elementą iš kairės į dešinę, pradedant trečiu');
  {
    for (let i = 2; i < numbers.length; i += 2) {
      console.log(numbers[i]);
    }
  }
  console.groupEnd();
  console.groupCollapsed('29. Atspausdinkite <numbers> masyvo kas antrą elementą iš dešinės');
  {
    for (let i = numbers.length - 1; i >= 0; i -= 2) {
      console.log(numbers[i]);
    }
  }
  console.groupEnd();
  console.groupCollapsed('30. Atspausdinkite <numbers> masyvo kas trečią elementą iš dešinės');
  {
    for (let i = numbers.length - 1; i >= 0; i -= 3) {
      console.log(numbers[i]);
    }
  }
  console.groupEnd();
  console.groupCollapsed('31. Atspausdinkite <numbers> masyvo kas antrą elementą iš dešinės, pradedant prieš prieš paskutiniu');
  {
    for (let i = numbers.length - 2; i >= 0; i -= 2) {
      console.log(numbers[i]);
    }
  }
  console.groupEnd();
}
console.groupEnd();
