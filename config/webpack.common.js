// ESTE ARCHIVO CONTIENE LAS CONFIGURACION EN COMUN PARA WEBPACK TANTO PARA DESARROLLO COMO PARA PRODUCCION
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
    // AL REFRESCAR LA PAGINA, PRIMERO SE CARGARA MI INDEX PARA PODER CARGAR EL REACT TOUTER DOM Y POSTERIORMENTE RENDERIZAR EL ROUTE SOLICITADO
    devServer: {
        historyApiFallback: true,
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