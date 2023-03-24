const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, 'true');
        xhr.send(); // Usado para POST.

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status <= 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    });

    /*
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status <= 300){
                obj.success(xhr.responseText);
            } else {
                obj.error({
                    code: xhr.status,
                    msg: xhr.statusText
                });
            }
        });
    */
};

document.addEventListener('click', e => {
    const elemento = e.target;
    const tag = elemento.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(elemento);
    }
});

async function carregaPagina(elemento) {
    const href = elemento.getAttribute('href');
    console.log(href);

    const objConfig = {
        method: 'GET',
        url: href
    }

    try {
        const response = await request(objConfig);
        carregaResultado(response);
    } catch(error) {
        console.log(error);
    }

};

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
};
