const lista = document.querySelector('#listadoproductos')

fetch('../js/data.json')
    .then( (res) => res.json())
    .then( (data) => {

        data.forEach((producto) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <p>${producto.nombre}</p>
                <p>$ ${producto.precio}</p>
                <p>CódigoProducto: ${producto.id}</p>
                <hr/>
            `
   
            lista.append(li)
        })
    })
