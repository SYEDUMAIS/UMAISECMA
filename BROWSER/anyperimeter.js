const fencingforany=(edges,munberofwire,rate)=>
{
    let sum=0;
    console.log(edges.length);
    for (let i=0; i < edges.length; i++)
    {
        sum=sum+edges[i];
    }
    totalcost=sum*munberofwire*rate;
    return totalcost;
}

console.log(`total fencing cost is: ${fencingforany([33.1,15.3,16.74,45,452],3,8.3 )}`);

// Optimum solution-------------


// const fencingforany=(edges,munberofwire,rate)=>
// {
//     let sum=0;
//     edges.forEach(element => {
//         sum=sum+element
//     });
    
//     return sum*munberofwire*rate;
// }

// console.log(`total fencing cost is: ${fencingforany([33.1,15.3,16.74,45,452],3,8.3 )}`);