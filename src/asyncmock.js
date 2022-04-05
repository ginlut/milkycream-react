const products = [{
        id: 1,
        title: '7 maravillas',
        price: 1000,
        img: './images/7-maravillas.jpg',
        stock: 25,
        description: 'Helado de chocolate, chantilly, chocolisto, minibrownies, nutella y gotas de chocolate.'
    },
    {
        id: 2,
        title: 'Frutos Rojos',
        price: 3500,
        img: './images/import-xxl.jpg',
        stock: 25,
        description: 'Helado de Fresa y vainilla con salsa de fresa, crema chantilly y cerezas'
    },
    {
        id: 3,
        title: 'Import',
        price: 8500,
        img: './images/frutos-rojos.jpg',
        stock: 25,
        description: 'Helado de chocolate, Ferrero Rocher, kinder bueno, nutella y gotas de chocolate.'
    },
    {
        id: 4,
        title: 'Malteada Genovesa',
        price: 4500,
        img: './images/genovesa.jpg',
        stock: 25,
        description: 'Helado Tres leches, chantilly, arequipe, salsa de chocolate y piazza'
    }
]

export const getProducts = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}