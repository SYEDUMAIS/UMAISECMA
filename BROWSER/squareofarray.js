// const sqrofarray=(numbers)=>
// {
//     let sqr=[];
//      numbers.forEach((element) => {
//         sqr=sqr.concat(Math.pow(element**2));
//      });
//      return sqr;
// }

// console.log(sqrofarray([5,2,7,9,10]));
// opt solution

// const sqrofarray=(numbers)=> numbers.map((element)=>element**2);

// console.log(sqrofarray([4,7,10,11,15]));

const sqrofarray=(numbers,power)=> numbers.map((element)=>element**power);

console.log(sqrofarray([4,7,10,11,15],2));
