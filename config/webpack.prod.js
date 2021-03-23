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
