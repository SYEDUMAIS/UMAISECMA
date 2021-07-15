// fencing for rectangular plot
// const fencingforrect=(base, width, numberofwire, costperfeet)=>
// {
//     const perimeter= base +width+base+width;
//     const totalcost= perimeter*numberofwire*costperfeet;
//     return totalcost;
// }

// console.log(`total cost of fencing will be ${fencingforrect(20,30,5,10)}`)

// fencing for trialgular shape plot
const fencingfortri = (base, width, angle, numberofwire, costperfeet) => 
{
  const perimeter = base + width + angle;
  const totalcost = perimeter * numberofwire * costperfeet;
  return totalcost;
};

console.log(
  `total cost of fencing will be ${fencingfortri(20, 30, 35, 5, 10)}`
);
