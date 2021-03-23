INICIAR Y CONFIGURAR UN PROYECTO REACT SIN REACT CLIENT.
1. CREAR CARPETA PUBLIC Y CARPETA SRC.
2. CREAR INDEX.HTML EN LA CARPETA PUBLIC CON UN DIV CON ID "ROOT".
3. CRAR EN LA CARPETA SRC: INDEX.JS, APP.JSX,
4. CONFIGURAR EN EL INDEX.JS PAR QUE IMPORTE EL APP.JSX, LO RENDERISE Y LO INYECTE EN EL DIV "ROOT" DE NUESTRO HTML.
<!--
    import ReactDOM from 'react-dom';
    import App from './App';

    ReactDOM.render(<App />, document.getElementById("root")); -->
5. INSTALAR NODE.JS
6. CREAR PROYECTO CON EL COMENDO:
    npm init
7. INSTALAR DEPENDENCIAS REACT:
    npm i react
    npm i react-dom
8. INSTALAR DEPENDENCIAS Y LOADER WEBPACK:
    Webpack: empaqueta y optimiza todos nuestro codigo: html, js, css, sass, img, en un archivo mas chico y que sea mas rapido de entender por todos los navegadores:

INSTALAMOS:
    npm i webpack -D(despencia de desarrollo)
    npm i webpack-cli -D
    npm i clean-webpack-plugin -D
    npm i html webpack-plugin -D
    npm i sass sass-loader -D
    npm i style-loader css-loader -D
    npm i webpack-dev-server -D
    npm i webpack-merge -D
    npm i mini-css-extract-plugin -D
9. CREAR EN EL PACKAGE.JSON:
<!--
    "scripts": {
    "build": "webpack serve --config config/webpack.dev.js",
    "build-prod": "webpack --config config/webpack.prod.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
    -->
    BUILD: PARA DESARROLLO CON LA DIRECCION DEL ARCHIVO DE WEBPACK PARA DESARROLLO.
    BUILD-PROD PARA BILDEAR PARA PRODUCCION CON LA DIRECCION DE CONFIGURACION DE WEBPACK PARA PRODUCCION.

10. CREAR CARPETA  CONFIGURACION DE WEBPACK: (entry, outpot, mode, modules, loader)
    "CONFIG"
    CREAR ARCHIVO: "webpack.common.js"
    INSERTAR ESTE CODIGO EN EL ARCHIVO:
    <!---
            // ESTE ARCHIVO CONTIENE LAS CONFIGURACION EN COMUN PARA WEBPACK TANTA PARA DESARROLLO COMO PARA PRODUCCION

        const HtmlWebpackPlugin = require('html-webpack-plugin');
        const { CleanWebpackPlugin } = require('clean-webpack-plugin');
        const path = require("path");

        /** CONFIGURACION DE WEBPACK: ENTRE, OUTPUT, MODE, LOADER, PLUGINS */
        /** para generar autocompletado en VSC @type {import('webpack').Configuration} */

        module.exports = {
            // ARCHIVO DE ENTRADA PARA QUE WEBPACK EMPAQUETE
            entry: "./src/index.js",
            // DIRECCION  ACTUAL DEL PROYECYO Y NOMBRE DE LA CARPETA QUE CREARA WEBPACK CON LOS ARCHIVOS EMPAQUETADOS
            output: {
                path: path.resolve(__dirname, '../dist'),
                // EL CONTENTHASH LO QUE HACE ES CREAR EL ARCHIVO CON UN NUMERO AL AZAR PARA AYUDAR A INDINTIFICAR ARCHIVOS NUEVOS CON CAMBIOS
                filename: 'main.[contenthash].js',
                    },

             module: {
                // LOS LOADER SE ENCARGARAN DE TRANSFORMAR Y VALIDAR NUESTRO CODIGO PARA PODER REALIZAR EL EMPAQUETADO FINAL.
                //CONFIGURACION DE LOS LOADER: USE: NOMBRE DEL LODER QUE VAMOS A USAR.
                // TEST: QUE TIPO DE ARCHIVO QUE PASE POR EL LOADER INDICADO EXPRESADO EN EXPRESION REGULAR.
                // EXPLUDE: PARA EXPLUIR ARCHIVOS. EN ESTE CASO EXPLUIMOS LOS ARCHIVOS DE NODE_MODULES.
                 rules: [
                            {
                                use: "babel-loader",
                                test: /.(js|jsx)$/,
                                exclude: /node_modules/,
                            },
                            // ESTE LOADER SE ENCARGA DE TRABAJAR LOS ARCHIVOS MULTIMEDIO DE NUESTRO ARCHIVO PARA GENERAR URL DE VERDAD Y LAS IMAGENES PEQUEÑAS MENOR A 8KB LAS EMBADE EN EL HTML COMO UN BASE64
                            {
                                type: "asset",
                                test: /.(png|svg|jpg|jpeg|git)$/i,
                            },
                        ],
                    },
            // ESTA CONFIGURACION ES PARA QUE WEBPACK RESULVA POR DEFECTO LOS ARCHIVOS QUE TENGAS LAS EXTENCIONES EXPRESADAS.
            resolve: {
                extensions: ['.js', '.jsx', '.json'],
                    },
            plugins: [
                // ESTE PLUGIN ELIMINA AUTOMATICAMENTE LOS EMPAQUETADOS ANTERIORES EN LA CARPETA DIST AL MOMENTO DE COMPILAR EL CODIGO Y HAYAN CAMBIOS.
                new CleanWebpackPlugin(),
                // ESTE PLUGIN AÑADE AUTOMATICAMENTE EL ULTIMO EMPAQUETADO COMPILADO EN NUESTRO INDEX.HTML GENERANDO UN INDEX NUEVO PARA SER SUBIDO AL SERVIDOR.
                new HtmlWebpackPlugin({
                    template: './public/index.html' }),
                    ],
        };
    -->
11. CREAR ARCHIVO "webpack.dev.js
    AGREGAR ESTE CODIGO SOLO PARA TIEMPO DE DESARROLLO:
    <!---
    //CONFIGURACION DE WEBPACK PARA TIEMPO DE DESARROLLO
    const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
    const { HotModuleReplacementPlugin } = require("webpack");
    const { merge } = require("webpack-merge");
    const common = require("./webpack.common");

    /** para generar autocompletado en VSC @type {import('webpack').Configuration} */
    // ESTA CONFIGURACION PERMITE UTILIZAR CON SERVIDOR LOCAL ESTANDO EN LA ETAPA DE DESARROLLO PARA VER LOS CAMBIO QUE VA TENIENDO NUESTRO PROYECTO.

    const devConfig = {
        mode: 'development',
        devServer: {
            // DIRECCION DEL PUERTO A UTILIZAR PARA EL LIVE SERVER
            port: 3000,
            // CARPETA QUE VA A REVISAR SI LOS ARCHIVOS SUFRIERON CAMBIOS
            contentBase: "../dist",
            // NAVEGADOR DONDE SE ABRIRA EL SERVIDOR
            open: "chrome",
            // PARA EL FASTREFRESH FUNCIONE CORRECTAMENTE.
            hot: true,
        },
        // PARA QUE EL DOM SE MODIFIQUE CUANDO HAGA CAMBIOS EN DESARROLLO
        target: "web",
        // CONFIGURACION PARA QUE CUANDO SE HAGAN CAMBIOS Y SE MUESTREN EN EL DOM SE RESPETA EL ESTADO DE LOS COMPONENTES DE REACT.
        plugins: [
            new HotModuleReplacementPlugin(),
            new ReactRefreshWebpackPlugin()
        ],
        // CONFIGURACION PARA PODER REVISAR NUESTRO ARCHIVOS EN EL NAVEGADOR A LA HORA DE INSPECCIONAR Y NUESTROS ARCHIVOS APARECERAN TANTO COMPILADOS COMO LOS ORIGINALES Y ASI PODER REVISAR Y DEBBAGUEAR Y ES NECESARIO.
        devtool: "eval-source-map",
        module: {
            rules:
            [
                {
                    use: ['style-loader', 'css-loader', "sass-loader"],
                    test: /.(css|sass|scss)$/,
                }
            ],
        }
    };

    // EL MERGE COMBINA LOS DOS ARCHIVO A LA HORA DE REALIZAR EL BUILD PARA DESARROLLO
    module.exports = merge(common, devConfig);
    -->
12. CREAR ARCHIVO "webpack.prod.js"
AGREGAR ESTE CODIGO PARA LA CONFIGURACION EN AMBIENTE DE PRODUCCION:
<!---
    // ESTA CONFIGURACION DE WEBPACK ES PARA AMBIENTE DE PRODUCCION
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/** para generar autocompletado en VSC @type {import('webpack').Configuration} */

const prodConfig = {
    mode: 'production',
    // PARA QUE EN AMBIENTE DE PRODUCCION EL NAVEGADOR SOLO MUESTRE LOS SOURCE COMPILADOS A JS BASE.
    devtool: "source-map",
    //PARA QUE SE CREEN DOS ARCHIVOS: 1 CON EL CODIGO DE LAS LIBRERIAS EXTERNAS EMPAQUETADO Y OTRO CON NUESTRO CODIGO EMPAQUETADO
    // EL ARCHIVO DE LAS LIBRERIAS QUERADA CATCHEADO EN EL NAVEGADOR ASI SI HACEMOS CAMBIOS LOS NAVEGADORES SOLO VOLVERAN A CARGAR NUESTRO CODIGO
    //HACIENDO MAS RAPIDA LA CARGA DE LA PAGINA.
    optimization: {
         splitChunks:{
             chunks: "all",
         },
     },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                // ESTA CNFIGURACION CREARA UN ARCHIVO DE ESTILOS APARTE PARA EL AMBIENTE DE PRODUCCION.
                use: [MiniCssExtractPlugin.loader, 'css-loader', "sass-loader"],
                test: /.(css|sass|scss)$/,
            },
        ]
    }
};

// EL MERGE COMBINA LOS DOS ARCHIVO A LA HORA DE REALIZAR EL BUILD-PROD.
module.exports = merge(common, prodConfig);
-->

11. INSTALAR DEPENDENCIAS DE BABEL
 BABEL: COMPILADOR DE CODIGO QUE LLEVARA NUESTRO CIDIGO REACT AL NIVEL MAS BAJO DE JAVASCRIPT. 
 INSTALAMOS:
    npm i @babel/core @babel/preset-env @babel/preset-react @babel-loader -D

    el babel-loader sera el encargador de poder enlazar babel con webpack.
    y babel/core y babel/preset-env y babel/preset-react sera los encargador de compilar nuestro codigo React a Js puro.

12. INSTALAMOS LAS DEPENDECIAS PARA LOS POLYFILES QUE ES LO QUE PERMITIRA LA COMPILACION DE CODIGO MAS ACTUAL EN REACT:
INSTALAMOS:
    npm i core-js

"useBuiltIns":  "usage" -> le indica a care que revise mi codigo y al encontrar alguna porcion que sabe que los navegadores no entendera aplique un polyfile a esa porcion de codigo para poder ser copilado.

13. CRAR ARCHIVO DE CONDIGURACION DE BABEL:
    "babel.config.json"

La configuracion "runtime": "automatic": es para que react se importe automaticamente a todos nuestros componentes y no tener que importarlo a mano en cada uno de ellos.
    <!---
    {
    "presets": [
        [
            "@babel/preset-env",
        {
            "corejs": 3.9,
            "useBuiltIns":  "usage"
        }
        ],
        [
            "@babel/preset-react",
        {
         "runtime": "automatic"
        }
        ]
    ]
    }
    -->
14. CONFIGURAR EN EL PACKAGE.JSON LOS NAVEGADORES A LOS CUALES QUEREMOS QUE NUESTRO CODIGO COMPILE.
0.25% -> indica que queremos que el codigo de compile para navegadores que tengan mas del 25% de uso.
not dead -> indica que no queremos que nuestro codigo se compile para navegadores que tengas mas de 2 años sin soporte.
not ie 11 -> indicamos que no compile para internet explorer 11
<!---
    "browserslist": "> 0.25%, not dead, not ie 11"
-->

15.DESCARGAR:
    npm i web-vitals
    Crear en la carpeta SRC el archivo reportWebVitals.js con el siguiente codigo:
    <!---
            const reportWebVitals = onPerfEntry => {
        if (onPerfEntry && onPerfEntry instanceof Function) {
            import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
            });
        }
        };
    export default reportWebVitals;
    -->

16. FUENTE:
https://www.youtube.com/watch?v=97Ajv8-NRVY



