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
const numeroMinimo=50, numeroMaximo=100

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
crearParrafo();
