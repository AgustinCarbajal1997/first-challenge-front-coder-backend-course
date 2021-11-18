# Proyecto final del curso de React JS - CoderHouse

## Acerca del proyecto
Este proyecto es el resultado final de todo lo trabajado a lo largo de la cursada. Consiste, brevemente, en el desarrollo de un ecommerce utilizando React JS, además de todas las herramientas vistas en clases, como ser: React-Router-Dom, useContext, Firebase. Tambien se agregaron librerias como React Toastify, React Icons y React Loading. Por otro lado, para los estilos se utilizó CSS puro con la finalidad de que el proyecto conserve su originalidad y, fundamentalmente, continuar perfeccionando su uso.
Para levantar el proyecto en localhost utiliza npm start en tu consola. 


## Convenciones

* Se utiliza la arquitectura de división de componentes en aquellos que son contenedores (con toda o casi toda la lógica del componente) y aquellos otros que son de presentación (con aquello que se va a renderizar en pantalla, ignorando de donde provienen sus datos). Esta modularidad permite una fácil reutilización de los componentes, como se da en el caso, en este proyecto, con el ItemList (utilizado para mostrar productos tanto por ItemListContainer como por SearchContainer).
* A la hora de definir las funciones me inclinó por utilizar las arrow functions. En cuanto a su nomenclatura, cuando se trata de una función componente utilizo UpperCamelCase, si se trata de un método dentro de un componente utilizo lowerCamelCase.
* Para la nomenclatura de los archivos utilizo UpperCamelCase.

## Flujo de compra
Ingresá al producto que te interesa, seleccioná la cantidad y lo agregás al carrito de compras. Llenás tus datos y recibirás una orden de pago con tus datos y los de la compra. Veamos un ejemplo:

![alt-text](https://github.com/AgustinCarbajal1997/first-app-react/blob/master/public/buying-product-1.gif)

## Flujo de búsqueda
Integrado con el header, encontrarás una barra de búsquedas. La misma, para funcionar, utiliza uno de los parámetros de comparación del método where de Firestore. Se trata de 'array-contains-any'. Esto, junto con algunos tags o keywords introducidos en cada registro de producto en base de datos, permite que puedas escribir en la barra de búsqueda palabras claves (tales como celular, Samsung, notebook, acondicionado, aire, etc...). El buscador arrojará las coincidencias que encuentre y los pintará en pantalla. Veamos un ejemplo:

![alt-text](https://github.com/AgustinCarbajal1997/first-app-react/blob/master/public/buying-product-2.gif)


## Flujo de stocks
Cada artículo tiene un número limitado de unidades. Cuando intentes agregar al carrito un número superior al stock, se te mostrará una notificacón de dicho límite alcanzado. Por otro lado las compras son dinámicas, esto quiere decir que una vez que confirmes tu compra y recibas la orden de pago, los productos se descontarán de la base de datos. Esto podrás corroborarlo ingresando nuevamente al producto y probando su límite máximo o en el caso de que hayas comprado todas las unidades, en la pagina del producto figurará que no hay unidades en existencia por el momento. Esta funcionalidad se realiza a traves del batch.update de firestore. Veamos un ejemplo:

![alt-text](https://github.com/AgustinCarbajal1997/first-app-react/blob/master/public/buying-product-3.gif)

## Manejo de formulario
Para el manejo del formulario, al tener tantos campos, me pareció interesante implementar un useReducer, evitando la utilización de demasiados useState, lo cual hubiera enredado innecesariamente el código. Cada campo tiene su propia expresión regular para validarlo. Con el método onBlur se notifica al usuario si lo introducido fue correcto o no.
