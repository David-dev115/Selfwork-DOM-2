


// Selfwork DOM 2

// Crea un file html con le seguenti caratteristiche:
// un input per il titolo
// una textarea per inserire un paragrafo
// un bottone per creare l’articolo

// Al click sul bottone, crea un articolo popolato dai valori prelevati dai due input
// inserire nell’articolo anche la data di pubblicazione tramite questa istruzione → Date - JavaScript | MDN

// let date = new Date();
// let formatDate = date.toLocaleDateString()

// EXTRA:
// fai in modo che, cliccando sul bottone crea articolo, se titolo o paragrafo sono vuoti, esca un alert che informi l’utente del problema
// fai in modo che, una volta creato l’articolo, gli input vengano puliti


let titolo = document.querySelector(`#titolo`);

let pubblica_tutto = document.querySelector(`#pubblica_tutto`);

let articolo = document.querySelector(`#articolo`);

let wrapper = document.querySelector(`#wrapper`);


wrapper.innerHTML = `<h1>hello world</h1>`;


let date = new Date();
let formatDate = date.toLocaleDateString();




pubblica_tutto.addEventListener( `click`, ()=>{
    
    if (titolo.value === `` || articolo.value === ``) {

        alert(`Titolo o Articolo vuoti`);

    } else {

               // *** correggo con videosoluzione ***
        // wrapper.innerHTML = `<h1>${titolo.value}</h1>`;
        
        // wrapper.innerHTML += `<p>${articolo.value}</p>`;
        
        // wrapper.innerHTML +=  `<p>${date}</p>`;

        let articolo_completo = document.createElement(`articolo_completo`);
        articolo_completo.innerHTML = `<h1>${titolo.value}</h1> <p>${articolo.value}</p> <p>${formatDate}</p>`;
        wrapper.appendChild(articolo_completo);

        titolo.value = ``;

        articolo.value = ``;
        
    }
    
    
} );




console.dir(titolo);
