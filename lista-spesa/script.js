// TODO:
// 1. Al click su "Aggiungi" (o premendo Invio) aggiungi un elemento alla lista
//    con il testo inserito nell'input.
// 2. Ogni elemento deve avere un bottone "Rimuovi" che lo elimina dalla lista.
// 3. Se l'input è vuoto, mostra un messaggio di errore e non aggiungere nulla.
// 4. (Bonus) Al click sul testo dell'elemento, barralo come "fatto".

const input = document.getElementById("item");
const btn_Aggiungi = document.getElementById("btn-aggiungi");
const lista = document.getElementById("lista");
const errore = document.getElementById("errore");
// const inputErrore = document.getElementById("errore");

function aggiungiLista(){

  errore.textContent= "";
  
  if(input.value === ""){
    errore.textContent = " *** Inserisci un prodotto *** ";
    return; 
  }

  // creo un nuovo <li> vuoto
  const nuovoItem = document.createElement("li"); 
  // riempio il <li> con quanto inserito dall'utente
  nuovoItem.textContent = input.value;

  // creo il bottone e lo metto nel <li>
  const bottoneRemove= document.createElement("button");
  bottoneRemove.textContent = "X";
  nuovoItem.append(bottoneRemove);
  bottoneRemove.addEventListener("click" , () =>{
    nuovoItem.remove();
  });

  // 2° METODO PER SCRIVERE IL BOTTONE: bottoneRemove.addEventListener("click", => nuovoItem.remove(); 


  // aggiungo il <li> alla lista
  lista.append(nuovoItem);
  // resetto l'input
  input.value="";
  
}

function rimuoviLista(){

}


btn_Aggiungi.addEventListener("click", aggiungiLista);



