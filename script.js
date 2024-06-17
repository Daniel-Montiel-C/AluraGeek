document.getElementById('producto-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const imagen = document.getElementById('imagen').files[0];
    
    // Crear un objeto URL para la imagen
    const imageUrl = URL.createObjectURL(imagen);
    
    // Crear un nuevo producto
    const producto = document.createElement('div');
    producto.className = 'producto';
    producto.innerHTML = `
        <img src="${imageUrl}" alt="${nombre}">
        <strong>${nombre}</strong>
        <span>$${precio}</span>
         <button class="eliminar"><img src="Icono/Icono.png" alt="Eliminar"></button>
    `;
    
    // Añadir el producto a la lista
    document.getElementById('lista-productos').appendChild(producto);
    
    // Limpiar el formulario
    document.getElementById('producto-form').reset();
    
    // Añadir evento para eliminar producto
    producto.querySelector('.eliminar').addEventListener('click', function() {
        producto.remove();
    });
});
