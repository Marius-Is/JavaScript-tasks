console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{ 
  function sortDrinkByPrice(drinks) {
    drinks.sort((a, b) => a.price - b.price);
    return drinks;
  }
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
  function addName(obj, name, value) {
    obj[name] = value;
    return obj;
  }
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
  function generation(x,y) {
    const elo = {
      '-3': { m: "great grandfather", f: "great grandmother" },
      "-2": { m: "grandfather", f: "grandmother" },
      "-1": { m: "father", f: "mother" },
      0: { m: "me!", f: "me!" },
      1: { m: "son", f: "daughter" },
      2: { m: "grandson", f: "granddaughter" },
      3: { m: "great grandson", f: "great granddaughter" },
    };
      return elo[x][y]
    }         
}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
  function maximumScore(tileHand) {
    return tileHand.reduce((p,c) => p + c.score, 0);
  }            
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
  function calculateDifference(obj, limit) {
	return (Object.values(obj)).reduce((a, b) => a + b) - limit
}
      
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
  function toArray(obj) {
    return Object.entries(obj);
  }
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
  function inkLevels(inks) {
    return Math.min(...Object.values(inks))
 }
          
}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
  function calculateLosses(obj) {
    if (Object.keys(obj).length === 0) return "Lucky you!";
    return Object.values(obj).reduce((a, b) => a + b);
  }
}
console.groupEnd();
