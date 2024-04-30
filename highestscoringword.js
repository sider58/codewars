function high(x){
    const alphabet = {
        a : 1, b : 2,
        c : 3, d : 4,
        e : 5, f : 6, 
        g : 7, h : 8, 
        i : 9, j : 10, 
        k: 11, l : 12, 
        m : 13, n : 14, 
        o : 15, p : 16, 
        q : 17, r : 18, 
        s : 19, t : 20, 
        u : 21, v : 22, 
        w : 23, x : 24, 
        y : 25, z : 26
    }

    let words = x.toLowerCase();
    words = words.split(' ')

    words.forEach((w, index) => {
        arrayWords.push([words[index]])
    });

    const arrayWords = [];
    let somme = {}
    let arraySomme = null;

    arrayWords.forEach(w => {
        // Mots
        w.forEach((string, index) => {

            const allLetters = string.split('');

            // Lettres
            allLetters.forEach(letter => {
                // Si une des lettres de l'objet est inclus dans les lettres (objet)
                if(allLetters.includes(letter)) {
                    // Remplacement lettre, numéro
                    allLetters.splice(allLetters.indexOf(letter), 1, alphabet[letter])

                    // La somme qu'on ajoute à un objet
                    somme[string] = allLetters.reduce((a, b) => a + b);
                }
            })

            arraySomme = Object.values(somme)
            
            // Objet qu'on tri en ordre décroissant
            arraySomme.sort((a, b) => b - a);
        })
    })

    for(prop in somme) {

        if(arraySomme[0] === arraySomme[1] && somme[prop] === arraySomme[0]) {
            if(x.indexOf(prop) === 0) {
                return prop;
            }
        }

        if(arraySomme[0] === somme[prop]) {
            return prop;
        }
    }
}

high("are you in are you out")