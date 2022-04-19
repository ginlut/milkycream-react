const products = [{
        id: '1',
        title: '7 maravillas',
        price: 1000,
        img: 'https://i.ibb.co/7QLfQ4W/7-maravillas.jpg',
        description: 'Helado de chocolate, chantilly, chocolisto, minibrownies, nutella y gotas de chocolate.',
        category: 'milkshake',
        stock: 5,
    },
    {
        id: '2',
        title: 'Frutos Rojos',
        price: 3500,
        img: 'https://i.ibb.co/SxSNNS6/frutos-rojos.jpg',
        description: 'Helado de Fresa y vainilla con salsa de fresa, crema chantilly y cerezas',
        category: 'milkshake',
        stock: 10,
    },
    {
        id: '3',
        title: 'Import',
        price: 8500,
        img: 'https://i.ibb.co/zVWLZ4P/import-xxl.jpg',
        description: 'Helado de chocolate, Ferrero Rocher, kinder bueno, nutella y gotas de chocolate.',
        category: 'malteada',
        stock: 15,
    },
    {
        id: '4',
        title: 'Malteada Genovesa',
        price: 4500,
        img: 'https://i.ibb.co/K0mXssD/genovesa.jpg',
        description: 'Helado Tres leches, chantilly, arequipe, salsa de chocolate y piazza',
        category: 'malteada',
        stock: 20,
    }
]
const categories = [
    { id: 'malteada', description: 'Malteadas' },
    { id: 'milkshake', description: 'Milkshakes' },

]

export const getProducts = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 2000)
    })
}


export const getProductsById = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}

export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 2000)
    })
}