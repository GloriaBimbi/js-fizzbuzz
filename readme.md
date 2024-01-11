# FIZZBUZZ

## CONSEGNA:

```plaintext
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
```

#### DOMANDE:

- Come faccio a sapere se un numero è divisibile per un altro?
- Abbiamo visto qualcosa di particolare che possiamo usare?

#### CONSIGLI:

1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

### BONUS 1:

Crea un container nel DOM , aggiungendo (attraverso le funzioni document.createElement() e append()) un elemento html con il numero o la stringa corretta da mostrare.

### BONUS 2:

Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

## SVOLGIMENTO:

- STEP 1: dichiaro e collego ad elementi html le variabili che mi servono:
  - fizz
  - buzz
  - fizzbuzz
- STEP 2: creo un ciclo che mi permette di contare da 1 a 100
  - al suo interno metto un if che:
    - SE il numero è multiplo di 15 stampo "FizzBuzz" al posto del numero
    - ALTRIMENTI SE è multiplo di 3 stampo "Fizz"
    - ALTRIMENTI SE è multiplo di 5 stampo "Buzz"
    - ALTRIMENTI stampo iL numerO su console
- STEP 3: collego il ciclo con il dom aggiungendo in html le card
- STEP 4: modifico lo stile delle caselle in base alla loro divisibilità
- STEP 5: ritocco la pagina html
