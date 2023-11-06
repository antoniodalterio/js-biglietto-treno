'use strict';

// 1. far scrivere all'utente tramite due prompt sui km da percorrere e l'età

const kilometriViaggio = parseInt(prompt('scrivi kilometri biglietto'));
console.log(kilometriViaggio);

const passeggeroEta = parseInt(prompt('scrivi la tua età'));
console.log(passeggeroEta);

// 2. in base ai kilometri calcolare il prezzoBiglietto (numeroKilometri \* 0,21€)
const prezzoBiglietto = Math.round(kilometriViaggio * 0.21).toFixed(2);
console.log(prezzoBiglietto + '€');

// 3. applicare uno sconto in base all'età del passeggero
// - SE (passeggeroEta > 18) si applica lo sconto del 20% sul prezzoBiglietto
//   - ALTRIMENTI SE (passeggeroEta < 65) si applica lo sconto del 40% sul prezzoBiglietto
//     sul prezzoBiglietto sul prezzoBiglietto

if (passeggeroEta < 18) {
  console.log(Math.round(prezzoBiglietto * 0.8).toFixed(2) + '€');
} else if (passeggeroEta > 65) {
  console.log(Math.round(prezzoBiglietto * 0.6).toFixed(2) + '€');
}
