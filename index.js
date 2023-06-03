const numbers = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

let sumPozitifElements = 0;
let countPozitiveElements = 0;
let countNegativeElements = 0;
let evenPozitiveElements = 0;
let sumEvenPozitiveElements = 0;
let oddPozitiveElements = 0;
let sumOddPozitiveElements = 0;
let productPozitiveElements = 1;
let maxElement = numbers[0];
let countMaxElement = 0;

for(let i = 0; i < numbers.length; i++){
   if(numbers[i] > 0){
    sumPozitifElements += numbers[i];
    countPozitiveElements ++;
    productPozitiveElements *= numbers[i];

   }
   if (numbers[i] < 0){
    countNegativeElements++;
   }

   if(numbers[i] > 0 && numbers[i] % 2 === 0){
    evenPozitiveElements++;
    sumEvenPozitiveElements += numbers[i];

   }
   if(numbers[i] > 0 && numbers[i] % 2 !== 0) {
    oddPozitiveElements++;
    sumOddPozitiveElements += numbers[i];
    }

    if(numbers[i] > maxElement){
        maxElement = numbers [i];
        countMaxElement = i;

    }
}


const result = "The sum of positive elements is " + sumPozitifElements + ". ";
const result2 = "\nThe maximum element of the array is " + maxElement + ". ";
const result3 = "\nIs the sequence number of the maximum element " + countMaxElement + ". ";
const result4 = "\nThere are a number of positive elements " + countPozitiveElements + ". ";
const result5 = "\nThere are a number of negative elements " + countNegativeElements + ". ";
const result6 = "\nNumber of odd positive elements is " + oddPozitiveElements + ". ";
const result7 = "\nNumber of even positive elements " + evenPozitiveElements + ". ";
const result8 = "\nThe sum of even positive elements is " + sumEvenPozitiveElements + ". ";
const result9 = "\nThe sum of odd positive elements is " + sumOddPozitiveElements + ". ";
const result10 = "\n The product of positive elements is " + productPozitiveElements + ". ";
    alert(result + result2 + result3 + result4 + result5 + result6 + result7 + result8 + result9 + result10);