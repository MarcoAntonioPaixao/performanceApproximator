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

let length = '10';
let percentage = '60';
let optimistMinutes;
let optimistSeconds;
let mediumMinutes;
let mediumSeconds;
let conservativeMinutes;
let conservativeSeconds;

const time = minutes + (seconds/60);
console.log(time);
// console.log(age);
// console.log(height);
// console.log(weight);

const IMC = weight / Math.pow(height, 2);
//console.log(IMC);

let VOMAX = ((1600 / time)*0.177)+8.101;

let VAM = (VOMAX) / 3.5;

document.getElementById('vo').textContent =  VOMAX.toFixed(2);
document.getElementById('vam').textContent = VAM.toFixed(2);

function calculatePrediction() {
  let numLength = parseInt(length);
  let numPercentage = parseInt(percentage);
  let predictedTime = (numLength / ((VAM * numPercentage)/100) ) * 60;//result in minutes
  mediumMinutes = Math.floor(predictedTime);
  mediumSeconds = predictedTime - Math.floor(predictedTime);
  
  let temp = predictedTime + (predictedTime * 0.05);
  optimistMinutes = Math.floor(temp);
  optimistSeconds = temp - Math.floor(temp);

  temp = predictedTime - (predictedTime * 0.05);
  conservativeMinutes = Math.floor(temp);
  conservativeSeconds = temp - Math.floor(temp);
  setPrediction();
}

function setPrediction() {
  document.getElementById('otimistaMinutos').textContent = optimistMinutes;
  document.getElementById('otimistaSegundos').textContent = (optimistSeconds.toFixed(2))*100;
  document.getElementById('mediaMinutos').textContent = mediumMinutes;
  document.getElementById('mediaSegundos').textContent = (mediumSeconds.toFixed(2))*100;
  document.getElementById('conservadoraMinutos').textContent = conservativeMinutes;
  document.getElementById('conservadoraSegundos').textContent = (conservativeSeconds.toFixed(2))*100;
}

calculatePrediction();

const raceLength = document.getElementById('raceLength');


raceLength.addEventListener('change', function() {
  length = this.value;
  calculatePrediction();
});

const performancePercentage = document.getElementById('percentage');


performancePercentage.addEventListener('change', function() {
  percentage = this.value;
  calculatePrediction();
});
