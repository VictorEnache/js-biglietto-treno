/* 
Consegna:

Chiedere al utente il numero di chilometri che vuole percorere
e l'età del passeggero.
Sulla base delle informazioni chieste sopra calcolare il prezzo totale del viaggio:
    - il prezzo deve essere definito in base ai km (0.21 € al km)
    - applicare uno sconto del 20% per i minorenni
    - applicare uno sconto del 40% per gli over 65
    
L'autput del prezzo finale va scritto in forma umana(con massimo due decimali, per indicare
 centesimi sul prezzo)
 */

//chiedo all' utente quante chilometri deve percorere
let km_da_percorere = Number(prompt("Quanti chilometri deve percorrere?"));

while (isNaN(km_da_percorere) || km_da_percorere <= 0){
    alert("il valore inserito non è valido, si prega di inserire un valore numerico corretto");
    km_da_percorere = Number(prompt("Quanti chilometri deve percorrere?"));
}

//chiedo all' utente l'età del passeggero
let eta_del_passeggero = Number(prompt("Quale è l'età del passeggero?"));

while (isNaN(eta_del_passeggero) || eta_del_passeggero <= 0 || eta_del_passeggero >200){ //i valori minori di 0 e maggiori di 200 non sono validi
    alert("il valore inserito non è valido, si prega di inserire un valore numerico corretto");
    eta_del_passeggero = Number(prompt("Quale è l'età del passeggero?"));
}

//dichiaro una variabile alla quale assegno il prezzo di un km
const prezzo_al_km = 0.21;

//dichiaro una variabile alla quale assegno lo sconto in percentuale per gli under 18
const discount_under_18 = 20/100;

//dichiaro una variabile alla quale assegno lo sconto in percentuale per gli over 65
const discount_over_65 = 40/100;


//dichiaro una variabile al interno della quale posso contenere ilò prezzo del biglietto
let prezzo_biglietto = km_da_percorere * prezzo_al_km;

//indico quando vanno applicati gli sconti
if (eta_del_passeggero < 18){
    prezzo_biglietto = km_da_percorere * prezzo_al_km - km_da_percorere * prezzo_al_km * discount_under_18;
}
else if (eta_del_passeggero > 65) {
    prezzo_biglietto = km_da_percorere * prezzo_al_km - km_da_percorere * prezzo_al_km * discount_over_65;
}

//arrotondo i numeri dopo la virgola fino ad un massimo di 2 cifre
let prezzo_finale_biglietto = prezzo_biglietto.toFixed(2) + "€";

//Stampo il prezzo finale del biglietto al interno di un h1
document.getElementById("costo_biglietto").innerHTML = prezzo_finale_biglietto;

// stampo sulla console il risultato reale e quello arrotondato
console.log(prezzo_biglietto)
console.log(prezzo_finale_biglietto)





