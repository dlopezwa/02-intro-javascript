const apiKey = 'tbelzERVxEikfohWRYETOOF113DLAGp4';
const urlApi = 'https://api.giphy.com/v1/gifs/random';


const peticion = fetch(`${urlApi}?apiKey=${apiKey}`);

const urlGif = peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        const url = data.images.original.url;
        const imagen = document.createElement('img');
        imagen.src = url;
        document.body.append(imagen);
    })
    .catch(console.warn);


console.log(urlGif);