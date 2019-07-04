# Sesión 8: Programación Funcional

- Regresando al archivo de `Tour.js`, observarás que tienes dentro de la clase, un método llamado `getTour`.


```javascript
async getTour(country){
        try {
            const res = await axios(`./data/${country}.json`)
            
            const singleTour = res.data.find( e => e.id === this.id);

```
La constante aplica un método de arreglo llamado .fin, el cual nos ayuda a encontrar tours, filtrando por país.

Esto significa que podríamos crear más archivos .json (colombia.json, peru.json), los cuales, al tener sus propios datos y al incorporalos a la aplicación, generaría un app más completa.

- Puedes empezar a trabajar en estos dos archivos, con las mismas propiedades de `mexico.json` para realizar las pruebas.

- Finalmente, en el área de `toursView.js` puedes observar que estamos utilizando otro método de arreglo, dentro de `renderTour.js`

```javascript
    <div class="tour__details">
            <div class="tour__info" style="text-align: center;">
                <span class="tour__info-data tour__info-data--minutes">
                    <p>${tour.descripcion}</p>
                    <p>Escalas: ${tour.escalas.map(el => el).join(" > ")}</p>
                </span>
            </div>
        </div>
```

En este caso, se está recorriendo un arreglo y cuando pasa al siguiente elemento, lo que sucede es que se le arregla un caracter ">" para separarlo.


## ALCANCE 31: Subiendo el proyecto a GitHub


Ahora, haz un push a GitHub Pages para tener el proyecto online. Ejecuta la iteración básica de Git.

```shell
git init
git add -A
git commit -m "MENSAJE"
git push origin master

```
