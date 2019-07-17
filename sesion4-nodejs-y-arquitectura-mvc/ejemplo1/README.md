### EJEMPLO 1: Crear la base de un proyecto web, a través de Node.js, Webpack y Babel.

DESARROLLO: 

1. Construir la base con Node.js

```shell
npm init --yes
```

2. Instalar las siguientes dependencias

```javascript
npm install --save-dev @babel/core @babel/preset-env babel-loader html-webpack-plugin webpack webpack-cli webpack-dev-server
npm install @babel/polyfill
```
Enlistando las dependencias, serían estas:

- @babel/core 
- @babel/preset-env
- babel-loader
- html-webpack-plugin
- webpack
- webpack-cli
- webpack-dev-server
- @babel/polyfill


3. Vamos a crear 2 archivos e incluiremos estos datos dentro de cada uno.

./webpack.config.js

```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: ['@babel/polyfill','./src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}
```

.babelrc


```javascript

{
    "presets": [
        ["@babel/env", {
            "targets": {
                "browsers": [
                    "last 5 versions",
                    "ie >= 8"
                ]
            }
        }]
    ]
}
```

4. Crearemos una carpeta nueva llamada "src" y dentro incluiremos un archivo "index.html" y otra carpeta llamada "js".

Esta sería la arquitectura a alcanzar:

```
|-node_modules
|    |-...
|-src
|    |-js
|    |   |-index.js
|    |
|    |-index.html 
|
|- .babelrc
|- package.json
|- webpack.config.js
```

5. Finalmente, desarrollaremos:

    - Dentro del archivo index.js un alert para confirmar que está compilando nuestros archivos .js
    - Dentro del archivo index.html una estructura básica (puedes utilizar "html:5" si te encuentras en Visual Studio Code como editor)


6. Integra dentro del package.json, los siguientes scripts:

```javascript

{
    ...
    "scripts": {
        "dev": "webpack --mode development",
        "build": "webpack --mode production",
        "start": "webpack-dev-server --mode development --open"
    },
    ...
}
```

7. Ejecuta en terminal:

```shell
npm run dev
```

Y deberás tener tener una alerta de "Hola mundo". Con esto, tenemos listo nuestra base para crear proyectos con NodeJS.
