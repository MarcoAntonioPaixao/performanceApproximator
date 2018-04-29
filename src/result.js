const athleteAge = localStorage.getItem('age');
const athleteHeight = localStorage.getItem('height');
const athleteWeight = localStorage.getItem('weight');
const gender = localStorage.getItem('gender');
const stringMinutes = localStorage.getItem('minutes');
const stringSeconds = localStorage.getItem('seconds');

const age = parseInt(athleteAge, 10);
const weight = parseInt(athleteWeight, 10);
const height = parseInt(athleteHeight, 10);
const minutes = parseInt(stringMinutes, 10);
const seconds = parseInt(stringSeconds, 10);

const time = minutes + (seconds/60);
console.log(time);

// console.log(age);
// console.log(height);
// console.log(weight);

const IMC = weight / Math.pow(height, 2);
//console.log(IMC);

if(gender === 'male'){
  const VOMAX = 0.21*(age) - 0.84*(IMC) - 8.41*(time) + 0.34*(Math.pow(time, 2) + 108.94);
}else{
  const VOMAX = 0.84*(IMC) - 8.41*(time) + 0.34*(Math.pow(time, 2) + 108.94);
}

const VAM = (VOMAX - 2.209) / 3.43;
