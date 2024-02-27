# script03
>   ### Declaramos el cuerpo de la pagina, donde agregaremos los contenedores
``` javascript
 const body = document.querySelector('body')
```
Creamos un arreglo con palabras, para poder sacar de este palabras aleatorias y asi generar un parrafo aleatorio
```javascript
const palabras = ['humanidad', 'humano', 'persona', 'gente', 'hombre', 'mujer', 'bebé', 'niño', 'niña', 'adolescente', 
                'adulto', 'adulta', 'anciano', 'anciana', 'don', 'doña', 'señor', 'señora', 'caballero', 'dama', 'individuo', 
                'cuerpo', 'pierna', 'pie', 'talón', 'espinilla', 'rodilla', 'muslo', 'cabeza', 'cara', 'boca', 'labio', 'diente', 
                'ojo', 'nariz', 'barba', 'bigote', 'cabello', 'oreja', 'cerebro', 'estómago', 'brazo', 'codo', 'hombro', 'uña', 
                'mano', 'muñeca', 'palma', 'dedo', 'glúteos', 'abdomen', 'hígado', 'músculo', 'cuello', 
                'corazón', 'mente', 'alma', 'espíritu', 'pecho', 'cintura', 'cadera', 'espalda', 'sangre', 'carne', 'piel', 'hueso', 
                'resfriado', 'gripe', 'diarrea', 'salud', 'enfermedad', 'familia', 'amigo', 'amiga', 'conocido', 'conocida', 'colega', 
                'pareja', 'esposo', 'esposa', 'matrimonio', 'amor', 'padre', 'madre', 'hermano', 'hermana', 'hijo', 'hija', 'abuelo', 
                'abuela', 'bisabuelo', 'bisabuela', 'nieto', 'nieta', 'bisnieto', 'bisnieta', 'primo', 'prima', 'tío', 'tía', 
                'sobrino', 'sobrina', 'criatura', 'especie', 'ser', 'vida', 'nacimiento', 'reproducción', 'muerte', 'naturaleza', 
                'campo', 'bosque', 'selva', 'jungla', 'desierto', 'costa', 'playa', 'río', 'laguna', 'lago', 'mar', 'océano', 'cerro', 
                'monte', 'montaña', 'luz', 'energía', 'animal', 'perro', 'gato', 'vaca', 'cerdo', 'caballo', 'yegua', 'oveja', 'mono', 
                'ratón', 'rata', 'tigre', 'conejo', 'dragón', 'ciervo', 'rana', 'león', 'jirafa', 'elefante', 'pájaro', 'gallina', 
                'gorrión', 'cuervo', 'águila', 'halcón', 'pez', 'camarón', 'langosta', 'sardina', 'atún', 'calamar', 'pulpo', 
                'insecto', 'bicho', 'mariposa', 'polilla', 'saltamontes', 'araña', 'mosca', 'mosquito', 'cucaracha', 'caracol', 
                'babosa', 'lombriz', 'marisco', 'molusco', 'lagarto', 'serpiente', 'cocodrilo', 'alimento', 'comida', 'bebida', 
                'vegetal', 'planta', 'pasto', 'césped', 'flor', 'fruta', 'semilla', 'árbol', 'hoja', 'raíz', 'tallo', 'hongo', 
                'ciruela', 'pino', 'bambú', 'nuez', 'almendra', 'castaña', 'arroz', 'avena', 'cebada', 'trigo', 'verdura', 'patatas', 
                'papas', 'judías', 'guisantes', 'porotos', 'rábano', 'zanahoria', 'manzana', 'naranja', 'plátano', 'pera', 'castaño', 
                'durazno', 'tomate', 'sandía', 'carne', 'gaseosa', 'tiempo', 'calendario', 'edad', 'época', 'era', 'fecha', 'instante' 
            ]
```
Se declaran como constantes 2 variables
```javascript
const numeroMinimo=50, numeroMaximo=100
```
las cuales tendran el valor minimo y el valor maximo de palabras que debe tener cada parrafo

Creamos una funcion ara crear parrafos, la cual contiene 2 ciclos for
```java script
function crearParrafo(){
    for(let i=0; i<5;i++){
        const parrafo = document.createElement('p')
        const cantidadPalabras = Math.floor(Math.random()* (numeroMaximo - numeroMinimo+1)) + numeroMinimo
        let texto = ''
        for(let m=0; m<cantidadPalabras; m++){
            const palabraUsada = palabras[Math.floor(Math.random() * palabras.length)]
            texto += palabraUsada + ' '
        }
        texto = texto + '--Cantidad de caracteres: '+ texto.length 
        //+ 'Cantidad De palabras: ' + cantidadPalabras
        parrafo.textContent = texto.trim()
        body.appendChild(parrafo)
        body.appendChild(document.createElement("br"));
        body.appendChild(document.createElement("br"));
    }
}
```
el primer ciclo for determina la cantidad de parrafos que se van a generar
```javascript
for(let i=0; i<5;i++)
```
Dentro de este se crea un elemento p (parrafo) por cada vez que entre al ciclo y tambien genera un numero random entre 50 y 100, este determinara la cantidad de palabras que tendra cada parrafo
```javascript
    const parrafo = document.createElement('p')
    const cantidadPalabras = Math.floor(Math.random()* (numeroMaximo - numeroMinimo+1)) + numeroMinimo
```
Se declra una variable string vacia ya que en esta se guardaran las palabras que vayan siendo agregadas al parrafo
```javascript
 let texto = ''
```
El segundo for, se repetetira la misma cantidad de veces que de palabras(el resultado de la funcion random anterior) que es la cantidad de palabras de nuestro parrafo
```javascript
for(let m=0; m<cantidadPalabras; m++)
```
En cada iteracion se generara un palabra random del arreglo palabras y se estara concatenando junto a un espacio a la variable **texto** que se delcaro antes
```javascript
    const palabraUsada = palabras[Math.floor(Math random() * palabras.length)]
    texto += palabraUsada + ' '
```
Una vez que termina el ciclo for, se le conctena a la variable texto la cantidad de caracteres que tiene el parrafo, esto se logra con el metodo .length
```javascript
texto = texto + '--Cantidad de caracteres: '+ texto.lengt
```
finalmete se agregaron las siguientes lienas de codigo para mejorar el resultado 
* cantidad de palabras es para debuguear y tener la cantidad de plabras presenta para contarlas y comprobar que funciona
```jacascript
 //+ 'Cantidad De palabras: ' + cantidadPalabras
```
* Se agrega el texto al al elemento parrafo con el metodo .trim pasa asi eliinar los espacion blanco al final que aparecen al agregar la ultima palabra
```javascript
        parrafo.textContent = texto.trim()
```
* se agrega el elemengo parrafo al cuerpo de la pagina y se agregan 2 saltos de linea despues de cada parrafo para mejorar su visualizacion
```javascript
        body.appendChild(parrafo)
        body.appendChild(document.createElement("br"));
        body.appendChild(document.createElement("br"));
```

* se manda a llamar la funcion
```javascript
crearParrafo();
```
