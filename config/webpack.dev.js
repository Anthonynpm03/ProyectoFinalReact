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
