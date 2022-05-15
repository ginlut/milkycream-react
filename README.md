# Milkycream

_Milkycream es un proyecto desarrollado para el curso de ReactJS de CoderHouse, se trata de un e-commerce desinado a la venta de helados, milkshakes, entre otros productos afines_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Instalación con git clone🔧

_Para acceder al proyecto clonándolo debe ejecutarse en la consola:_

```
git clone  https://github.com/ginlut/milkycream-react.git
npm install 
npm start
```

### Instalación con git clone🔧

_Para descargar el proyecto y revisarlo mediante descarga de ZIP, es necesario:_

```
Ir a “Code” en Github > Download ZIP
Descomprimir archivo ZIP en tu pc
```

_Una vez el proyecto se encuentre en el equipo, debe ejecutarse en la terminal:_

```
npm install 
npm start
```

## Ejecutando las pruebas ⚙️

_La página web generada luego del npm start permitirá realizar las pruebas necesarias sobre la funcionalidad del proyecto, desde la visualización de un catálogo total y por categorías, hasta la generación de una orden de compra a firebase._


## Construido con 🛠️

* HTML
* CSS
* JavaScript
* ReactJS

### Herramientas 🛠️

* [Boostrap](https://react-bootstrap.github.io/) - clases y estilos del proyecto.

* [Firebase](https://console.firebase.google.com/u/0/) - base de datos.

* [Fontawesome](https://fontawesome.com/icons) - íconos del proyecto.

* [Sweetalert2](https://sweetalert2.github.io/#examples) - alerta de orden de  compra generada.

## Services/Firebase📋

_Durante el proyecto se utiliza FireBase como servicio de almacenamiento, consulta, hosting y monitoreo, el cual se encuentra en toda la aplicación y el ciclo de desarrollo del mismo._

_El componente se encuentra dividido por las siguientes colecciones:_

* categories: categoría de los productos a ofrecer.

* orders: orden de compra generada desde el componente Form, la cual envía datos asociados al comprador al FireBase.

* products: datos asociados a los productos a ofrecer.

## Componentes📋

### NavBar

_Crea una barra de Navegación mediante la cual se puede acceder al total de los productos o las categorías de los mismos. Adicionalmente muestra el CartWidget desde el cual se puede acceder a los productos agregados al carrito._ 

### Item

_Genera una card en la cual aparecen los datos asociados a nombre, imagen y precio de cada producto, asimismo, contiene un botón que indica Ver Detalle que redirige al componente ItemDetail._

### ItemList - ItemListContainer

_ItemList e ItemListContainer se encargan de setear los productos en la pantalla principal llamando a la función Item, cargando todos los datos que se indican en ese componente y mapeando el filtro de los productos, el cual se encuentra categorizado en FireBase. Adicionalmente, muestra una imagen de cargado cuando la página se encuentra en dicho proceso._

### ItemDetail - ItemDetailContainer

_Cumplen la función de setear en pantalla los detalles de los productos seleccionados anteriormente. Adicionalmente, contiene un botón que redirige al cart una vez se hayan agregado productos al carrito. Por otro lado, muestra una imagen mientras se cargan los productos-detalles solicitados._

### ItemCount

_Genera la funcionalidad mediante la cual el usuario puede sumar o restar productos que serán añadidos al carrito, además indica y deshabilita el boton de Agreado cuando un producto se encuentra sin stock o si se intenta colocar un valor menor a 1._

### Cart e ItemCart - CartWidged

_ItemCart es una función que mapea todos los datos asociados a los productos agregados al cart, generando además un subtotal de compra necesario cuando se agregan varios productos del mismo ítem y permitiendo al usuario eliminar items que no desee en su compra._

_El Cart contiene varias funcionalidades: a) Genera un mensaje cuando no hay productos en el carrito e invita al usuario a ver los productos disponibles; b) Llama a la función ItemCart y genera un total por todos los ítems que fueron agregados al carrito; c) Contiene 3 botones con acción: Vaciar carrito (elimina todos los elementos agregados), Seguir comprando (redirige a la página principal para seguir viendo productos antes de finalizar la compra) y Continuar Compra (redirige al Form para culminar el proceso)._

_El CartWidged muestra una imagen de un carrito desde la cual se puede acceder a los productos agregados al cart, además de llamar a la función de getQuantity, la cual detalla en pantalla la cantidad de productos que se encuentran en el mismo._

### Form

_Es un formulario que solicita los datos del cliente y genera una orden de compra que se dirige a FireBase como una colección. Adicionalmente contiene una función para indicar cuando un producto se encuentra sin stock, y un mensaje final una vez realizada la compra._


## Funciones Context📋

_Context es usado a lo largo de todo el proyecto. Sus funciones son llamadas en la mayor parte de los componentes, estas son:_

* *addItem*: añade el producto al cart. Con la ayuda de isInCart, realiza una sumatoria sobre los productos iguales que se encuentran en el carrito, caso contrario generaunanueva línea para nuevos productos.

* *getQuantity*: recorre el cart para mostrar en el CartWidget la cantidad de productos añadidos.

* *isInCart*: identifica si el producto se encuentra en el carrito.

* *clearCart*: vacía el carrito.

* *getTotal*: calcula el valor total de la compra.

* *removeItem*: elimina los ítems seleccionados.


## Autor ✒️

* **Gina Lutfallah** - [ginlut](https://github.com/ginlut)

