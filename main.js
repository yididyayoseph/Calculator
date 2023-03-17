let input = document.querySelector('#calc--input');
let calcSum = '';

const buttonClick = function (a) {
  calcSum += a;
  input.textContent = calcSum;
};

document.querySelector('#equal').addEventListener('click', function () {
  try {
    let num = eval(calcSum);
    if (String(num) === 'Infinity') {
      input.textContent = 'Cannot divide by zero';
      calcSum = '';
    } else {
      input.textContent = num;
      calcSum = num;
    }
  } catch (err) {
    input.textContent = 'Error';
  }
});

document.querySelector('#clear').addEventListener('click', function () {
  calcSum = '';
  input.textContent = 0;
});

// const btn1 = document.getElementById('1');
// btn1.addEventListener('click', function() {
//   // Do something when button 1 is clicked
// });

// const btn2 = document.getElementById('2');
// btn2.addEventListener('click', function() {
//   // Do something when button 2 is clicked
// });

// const btn3 = document.getElementById('3');
// btn3.addEventListener('click', function() {
//   // Do something when button 3 is clicked
// });
