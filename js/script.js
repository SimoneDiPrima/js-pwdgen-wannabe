//analisi problema diviso per sezioni
/*1-chiedi all utente il suo nome;
2-inserisci il suo nome in una variabile;
3.chiedi all utente il suo cognome;
inserisci il suo cognome in una variabile;
4.chiedi il suo colore preferito e inseriscilo in una variabile;
5-stampa la nuova password generata con nome+cognome+colore+21*/
//prima di tutto devo inizializzare le variabili:

const Name = prompt(`Come ti chiami?`);
console.log(Name);
const Surname = prompt(`Qual e il tuo cognome??`);
console.log(Surname);

const favouriteColor= prompt(`qual e il tuo colore preferito?`);
console.log(favouriteColor);
const criteri = (Name + Surname + favouriteColor + 21);
console.log(Name + Surname + favouriteColor+21);

let newPassword = document.getElementById("my-password");
newPassword.innerHTML = `<strong>${criteri}</strong>`;