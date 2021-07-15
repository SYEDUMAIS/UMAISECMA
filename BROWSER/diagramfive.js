// ------------area of triangle and area of rectangle----------
const traianglearea = (base1, height1, height2, r1, r2) => 
{
  base = base1 - r1;
  areaoftriangle = 0.5 * (base * height1);
  areaofrectangle = base * height2;
  areaofcircle1 = 0.5 * (3.14 * r1 ** 2);
  areaofcircle2 = 3.14 * (r2 ** 2);
  totalarea = (areaofrectangle + areaoftriangle + areaofcircle1) - areaofcircle2;
  return totalarea;
};

// -------------put the values of varialbles--------
base1 = 15;
height1 = 50;
height2 = 14;
r1=7;
r2=5;

// -----------final area-------------
console.log(`total area of cross section is: ${traianglearea(base1, height1, height2, r1, r2)}`)