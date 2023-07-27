const arr = [1, 18,2, 3,7,4,8,6,9,12];
const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);

// console.log(max)

const maxiam = Math.max(...arr);

// console.log(maxiam)

minValue = Math.min(...arr);

// console.log(minValue)

function secondSmallestValue(arr){
    let first = Math.max(...arr),
     second = Math.max(...arr);

    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] < first){
            second = first;

            first = arr[i];
            console.log('Smallest Value is : ', second );
        }
        else if( arr[i] < second && arr[i] != first){
            second = arr[i];
        }
    }
    console.log('Second Smallest Value is : ', second );
}
secondSmallestValue(arr);