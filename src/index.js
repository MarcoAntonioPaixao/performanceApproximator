const athleteWeight = document.getElementById('weight');
const athleteHeight = document.getElementById('height');
const timeMinutes = document.getElementById('minutes');
const timeSeconds = document.getElementById('seconds');

localStorage.setItem('gender', 'male');

athleteWeight.addEventListener("change", function() {
  localStorage.setItem('weight', this.value);
  console.log(this.value);
});

athleteHeight.addEventListener("change", function ( ) {
  localStorage.setItem('height', this.value);
  console.log(this.value);
});


timeMinutes.addEventListener("change", function() {
  localStorage.setItem('minutes', this.value);
  console.log(this.value);
});

timeSeconds.addEventListener("change", function() {
  localStorage.setItem('seconds', this.value);
  console.log(this.value);
});

