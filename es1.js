Ottieni il titolo di un post con una Promise.

Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

function getPostTitle(id) {
    return new Promise((resolve, reject) => {
        fetch(https://dummyjson.com/posts/${id})
            .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                reject(Errore: ${ response.status } - Impossibile recuperare il post);
            }
        })
                .then(data => resolve(data.title))
                .catch(error => reject(Errore di rete: ${ error }));
    });
}


getPostTitle(1)
    .then(title => console.log("Titolo del post:", title))
    .catch(error => console.error(error));