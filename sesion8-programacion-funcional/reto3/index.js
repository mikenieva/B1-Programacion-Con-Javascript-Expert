const helados = [
    { sabor: 'vainilla', color: 'amarillo' },
    { sabor: 'fresa', color: 'rojo' },
    { sabor: 'chocolate', color: 'café' },
    { sabor: 'mora', color: 'morado' },
    { sabor: 'pera', color: 'verde' },
    { sabor: 'menta', color: 'verde' },
];

const saboresFavoritos = helados.filter(helado => helado.color === 'verde');

console.log(saboresFavoritos);
