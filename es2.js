Snack 2
Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20 % dei casi, il dado si "incastra" e la Promise va in reject.



function lanciaDado() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let dado = Math.floor(Math.random() * 6) + 1;
            let probabilità = Math.random();

            if (probabilità < 0.2) {
                reject("Errore: il dado si è incastrato.");
            } else {
                resolve(dado);
            }
        }, 3000);
    });
}


lanciaDado()
    .then(numero => console.log(`Il dado ha lanciato: ${numero}`))
    .catch(errore => console.error(errore));
