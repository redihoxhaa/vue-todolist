# CAMPO MINATO DOM

#### CONSEGNA DELL'ESERCIZIO 

```
Rifare l'esercizio della to do list.

Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
```

---

#### SVOLGIMENTO

MILESTONE 1

Ci creiamo i nostri elementi della lista inizializzando un ciclo con v-for, dal quale ci estrapoliamo il nostro elemento dall'array e il suo indice. Andiamo a stampare dentro il tag element.text. Dichiariamo una funzione che al click verifica lo stato del nostro **done** e lo cambia da false a true e viceversa. Ricordiamoci di passare l'indice a questa funzione. Applichiamo con operatore ternario una condizione in un pulsante affianco al testo, con la sintassi :class, in cui se done è true aggiungiamo una classe di testo barrato.

---

MILESTONE 2

Aggiungiamo una "x" al fianco di ogni task e dichiariamo una funzione deleteTask() con la quale andremo ad eliminare il nostro elemento con il metodo splice(). Ricordiamoci di passare come argomento anche qui l'index, seguito da 1.

---

MILESTONE 3

Creaimo un form di input con relativo bottone, dove andiamo a collegare l'input di testo tramite v-model ad una variabile vuota. In una funzione addTask(), invocata con il click del bottone, dichiariamo un oggetto vuoto. Grazie al v-model possiamo prendere il contenuto della variabile che contiene quello che abbiamo digitato nel capo, e lo assegnerà alla chiave .text del nostro oggetto vuoto, e setterà il .done a false. Una condizione verificherà che il testo inserito sia valido (non deve essere vuoto o contenere solo spazi), e pusheremo l'oggetto nell'array. Svuotiamo il campo riassegnando alla nostra variabile di nuovo "null".

---

BONUS 1

Con @keyup.enter nel tag di input andiamo a invocare la funzione add.Task() anche con il tasto Invio.

BONUS 2

Andiamo ad inserire l'operatore ternario di :class del pulsante di check anche nell'input di testo.


