const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const res = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    res.innerHTML = "Print valid height";
    return;
  }
  if (isNaN(weight) || weight <= 0) {
    res.innerHTML = "Print valid weight";
    return;
  }

  const bmi = (weight / (height * height) * 10000).toFixed(2);

  res.innerHTML = `<span>BMI: ${bmi}</span>`;
  const nl = document.createElement('br');
  res.appendChild(nl);

  if (bmi >= 18.6 && bmi < 24.9) {
    res.innerHTML += "<br>Normal range";
  } else if (bmi < 18.6) {
    res.innerHTML += "<br>Underweight";
  } else if (bmi > 24.9) {
    res.innerHTML += "<br>Overweight";
  }
});


// learning
// .toFixed for 2 decimal
// preventDefault cause submit event autoatically submit first so prevent that
// parseIntheight and weight needed in function to clac each time so written there
// used outer HTML ka syntax important
// basic yahi thhha select each div jisse kaam hai or modify krdo calc krke and jaaha check lgaane vo krdo 