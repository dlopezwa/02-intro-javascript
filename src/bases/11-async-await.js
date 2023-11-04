const getImagen = async() => {
    try {
        const apiKey = 'tbelzERVxEikfohWRYETOOF113DLAGp4';
        const urlApi = 'https://api.giphy.com/v1/gifs/random';
        const response = await fetch(`${urlApi}?apiKey=${apiKey}`);
        const { data } = await response.json();
        console.log(data);
        const url = data.images.original.url;
        const imagen = document.createElement('img');
        imagen.src = url;
        document.body.append(imagen);
    } catch (error) {
        console.warn(error);
    }
};

getImagen();