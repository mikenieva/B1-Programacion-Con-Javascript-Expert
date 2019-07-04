
## ALCANCE 13: Instalamos Node.js

- Tendrás que ir a la página de (NodeJS)[https://nodejs.org] y descargar el programa. Dependiendo de tu sistema operativo, se te indicará cuál es tu mejor recomendación.

De preferencia, elige el LTS (Long-Term Support) que significa una versión de Node que estará soportado y mantenido a largo plazo por la comunidad.

![NodeJS Installation](https://i.imgur.com/opSa7md.png)

Abrirás tu terminal y a través del siguiente comando confirmarás que ya lo tienes incorporado.

```shell
npm --version
```

Si el retorno es un número, significa que ya está listo tu sistema.


- Entraremos a la terminal y escribiremos:

```shell
npm init -y
```

Esto te construirá un archivo llamado `package.json`, el cual le reemplazarás este conjunto de configuraciones:

```javascript

{
  "name": "bedutravels-js",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "start": "webpack-dev-server --mode development --open"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.4.5",
    "@babel/preset-env": "^7.4.5",
    "babel-loader": "^8.0.6",
    "html-webpack-plugin": "^3.2.0",
    "webpack": "^4.35.0",
    "webpack-cli": "^3.3.5",
    "webpack-dev-server": "^3.7.2"
  },
  "dependencies": {
    "@babel/polyfill": "^7.4.4",
    "axios": "^0.19.0"
  }
}

```

Después de esto, ejecutarás en tu terminalo, ubicando en la carpeta del proyecto:

```javascript

npm install

```


## ALCANCE 14: Configuremos Webpack y Babel

- Vas a crear un archivo llamado `webpack.config.js` y otro llamado `.babelrc`

- Creamos una carpeta al nivel raiz, llamada `dist`. En esta carpeta, Webpack compilará todo el proyecto que se encuentra en `src` y lo simplificará.

```javascript

|- dist
|- src
|  |- js
|  |   |- models
|  |   |   |- Search.js
|  |   |   |- Tour.js
|  |   |
|  |   |- views
|  |   |   |- searchView.js
|  |   |   |- tourView.js
|  |   |   |- base.js
|  |   |
|  |   |- index.js
|  |   |- config.js
|  |
|  |- css
|  |  |- index.css
| 
|- index.html
|- package.json
|- .gitignore
|- .babelrc
|- webpack.config.js

```
Dentro de este archivo, crearemos las siguientes sentencias:

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

Lo que estamos indicando con esto es trazar las instrucciones para compilar todo tu código de la carpeta `src` a la carpeta `dist`.

Ahora, en el archivo `.babelrc`:

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

Este archivo lo que hace es apoyarte en que nosotros escribamos en las últimas versiones de Javascript y lo convierta en versiones anteriores para que pueda correr en cualquier navegador.

## ALCANCE 15: Javascript compilando con Webpack

- Teniendo todo esto, lo que sigue es correr el siguiente comando para que compile el proyecto y lo minifique dentro de la carpeta de `dist`.

```javascript

npm run build

```

Con esto, en esta carpeta, estará todo el proyecto compilado. Si tú abres el archivo `index.html` desde `dist`, funcionará sin problemas.


## ALCANCE 16: Integremos archivos y funciones previas

Ahora bien, ya que tenemos el flujo de archivos funcionando, nuestro último comando será correr el comando:

```javascript

npm run start

```

Este comando levanta un servidor y corre el proyecto en modo "desarrollo". 

Eso significa que puedes hacer cambios directamente en la carpeta `src` y se hará la actualización automáticamente.
