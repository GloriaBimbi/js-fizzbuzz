// - STEP : dichiaro e collego ad elementi html le variabili che mi servono:
// - fizz
// - buzz
// - fizzbuzz

// - STEP 1: creo un ciclo che mi permette di contare da 1 a 100
//    - al suo interno metto un if che:
//      - SE il numero è multiplo di 15 stampo "FizzBuzz" al posto del numero
//      - ALTRIMENTI SE è multiplo di 3 stampo "Fizz"
//      - ALTRIMENTI SE è multiplo di 5 stampo "Buzz"
//      - ALTRIMENTI stampo iL numero su console

// let generalCounter = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 15 == 0) {
//     generalCounter = "FizzBuzz";
//   } else if (i % 3 == 0) {
//     generalCounter = "Fizz";
//   } else if (i % 5 == 0) {
//     generalCounter = "Buzz";
//   } else {
//     generalCounter = i;
//   }
//   console.log(generalCounter);
// }

// - STEP 3: collego il ciclo con il dom aggiungendo in html le card
let generalCounter = 1;

let cardContainerEl = document.getElementById("card-container");

for (let i = 2; i <= 101; i++) {
  cardContainerEl.innerHTML += `
    <div class="card" id="card-element">
       <h3>${generalCounter}</h3>
    </div>
    `;

  let cardElement = document.getElementById("card-element");

  if (i % 15 == 0) {
    generalCounter = "FizzBuzz";
    // generalCounter.style.color = "red";
    // cardElement.style.backgroundColor = "red";
  } else if (i % 3 == 0) {
    generalCounter = "Fizz";
    // cardElement.style.backgroundColor = "green";
  } else if (i % 5 == 0) {
    generalCounter = "Buzz";
    // cardElement.style.backgroundColor = "yellow";
  } else {
    generalCounter = i;
    // cardElement.style.backgroundColor = "blu";
  }

  //   console.log(generalCounter);
}
