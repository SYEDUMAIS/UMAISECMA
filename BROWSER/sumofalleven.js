// const sumofeven = (numbers)=>
// {
//     let sum=0;
//     numbers.forEach(element => {
//         element=element%2==0 && (sum=sum+element);
        
//     });
//     return sum;
// }
// console.log(`the sum of all even numbers in given array is: ${sumofeven([5,2,7,9,10,8,17,115,10])}`)

// even and odd

const sumofeven = (numbers)=>
{
    let sumodd=0;
    let sumeven=0;

    numbers.forEach(element => {
        element=element%2==0 ? (sumodd=sumodd+element) : (sumeven=sumeven+element)
        
    });
    return `${sumodd} and ${sumeven}`;
}
console.log(`the sum of all even numbers and 
odd numbers in given array is: ${sumofeven([5,2,7,9,10,8,17,115,10])}`)