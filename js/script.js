//analisi problema diviso per sezioni
/*1-chiedi all utente il suo nome;
2-inserisci il suo nome in una variabile;
3.chiedi all utente il suo cognome;
inserisci il suo cognome in una variabile;
4.chiedi il suo colore preferito e inseriscilo in una variabile;
5-stampa la nuova password generata con nome+cognome+colore+21*/
//prima di tutto devo inizializzare le variabili:

const Name = prompt(`Come ti chiami?` , `scrivi il tuo nome`);
console.log(Name);
const Surname = prompt(`Qual e il tuo cognome??` , `scrivi il tuo cognome(possibilmente scriverlo attaccato)`);
console.log(Surname);

const favouriteColor= prompt(`qual e il tuo colore preferito?` , `scrivi qual e il tuo colore preferito`);
console.log(favouriteColor);
console.log(Name + Surname + favouriteColor+21);

const newPassword = document.getElementById(`my-password`);
newPassword.innerHTML = `<strong>${Name}</strong>`+`<strong>${Surname}</strong>`+`<strong>${favouriteColor}</strong>`+`<strong>21</strong>`;
console.log(newPassword);