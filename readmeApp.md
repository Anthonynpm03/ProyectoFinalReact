# Títle

_Tienda Coder_

# Description

Proyecto E-commerce, desarrolado con React.Js y conectado a base de datos de Firebase, que permite al usuario conocer las categorias de productos disponible en la tienda, asi como ver listados de estos mismos filtrados por dichas categorias. Permite agregar articulos a un carrito de compra con un manejador de Stock en tiempo real y actualizando la base de Datos al momento de finalizar la compra. Aplicando funcionabilidades que permite modificar el carrito de compras, elegir la modalidad de Retiro del pedido y para terminar la experiencia generamos un Ticktet final de orden de compra con toda la informacion recolectada, el cual sera almacenado en nuestra base de datos, dando la opcion al usuario de conectarse Via WhatsApp con la tienda para enviar el mismo Ticktet en formato Texto.

Aplicacion desarrollada como proyecto final del Curso React.Js de Coder House. [https://www.coderhouse.com/online/reactjs]

# Author

Anthony Perez [https://github.com/Anthonynpm03](Github)

<br />

## Instalation
- Clonar o descargar el repositorio, asegurandose que obtener todos los archivos.
- Abrir la carpeta descargado en su editor de Codigo preferido.
- Ejecutar el comando npm i firebase para instalar las dependencias de la base de datos.
- Ejecutada el comando ```npm install```en tu terminal para instalar las dependecias necesarias para el proyecto (node_modeles).
-Recuerda tener instalado Node.Js para poder usar el comando ```npm```. Si no lo tienes instalado puede hacerlo en este link [https://nodejs.org/es/download/].

### `Modo desarrollo`
- Ejecutada el comando ```npm run build``` para ejecutar el proyecto en modo desarrollo.
- Toma en cuenta que el proyecto esta compilando en Webpack, por lo tanto al ejecutar en modo desarrollo se obtendra un solo archivo .js compilado a vainilla JavaScript, pero podras observar los Source Map para inspeccionar los errores. Igualmente la app se recargara de forma autmatica si realiza alguna modificacion y podra observar las impresiones en consola.

### `Modo produccion`
- Ejecuta el comando ```npm run build-prod``` para ejecutar el protecto en modo produccion, al trabajar con WebPack, este comando creare una carpeta /dist, en el cual se crearan lso archivos Html, css y js compilados, empaquetados y ofuscados y generando Hash aleatorios en sus nombres. Posteriormente puedes ejecutar el index.html de la carpeta /dist en tu nevagador preferido.

<br />

## Demo
https://anthonynpm03.github.io/PruebaEcommerce/