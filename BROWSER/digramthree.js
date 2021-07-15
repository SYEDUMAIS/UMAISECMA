// ------------area of triangle and area of rectangle----------
const traianglearea=(base1,height1, height2)=>
{
    areaoftriangle= 0.5 *(base1*height1);
    areaofrectangle= (base1*height2)
    totalarea=areaofrectangle+areaoftriangle
    return totalarea;
}

// -------------put the values of varialbles--------
base1=15;
height1=10;
height2=20;

// -----------final area-------------
console.log(`total area of cross section is: ${traianglearea(base1,height1,height2)}`)