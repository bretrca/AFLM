## AFLM

La Asociación de Fans de Links Molones nos ha encargado una nueva web, para que sus asociados puedan disfrutar del repositorio de links que acaban de descubrir:
https://api.publicapis.org/

En el repositorio, los links están agrupados en diferentes categorías. Sin embargo, la AFLM solamente quiere que sus asociados vean los links de 4 categorías específicas: animales, libros, música y salud.

En la carpeta Images encontrarás los esbozos que nos han proporcionado sobre las vistas que quieren en su web:


### Imagen AFLM - Home
Esa será la página de inicio. En la parte inferior estarán ubicados los cuatro botones que se utilizarán para navegar a las vistas específicas. Los botones no podrán estar deshabilitados, pero al pulsar sobre ellos solamente navegarán a las vistas correspondientes si se cumplen las reglas de navegación de la AFLM. Si no se cumplen las reglas, se mostrará la vista de recordatorio de reglas.

### Imagen AFLM - Animals
Vista de links de animales. Vista en la que se mostrarán los links de animales. El botón “Volver” navegará a la página de inicio. En la cuadrícula de la parte izquierda se mostrará la relación de links de animales. Cuando se seleccione una fila, en la parte derecha se mostrarán los detalles del link (nombre, descripción y autor) y el botón “Navegar” permitirá navegar al link seleccionado.


### Imagen AFLM - Books
Vista de links de libros. Vista en la que se mostrarán los links de libros. El botón “Volver” navegará a la página de inicio. En la cuadrícula de la parte izquierda se mostrará la relación de links de libros. Cuando se seleccione una fila, en la parte derecha se mostrarán los detalles del link (nombre, descripción y autor) y el botón “Navegar” permitirá navegar al link seleccionado.


### Imagen AFLM - Music
Vista de links de música. Vista en la que se mostrarán los links de música. El botón “Volver” navegará a la página de inicio. En la cuadrícula de la parte izquierda se mostrará la relación de links de música. Cuando se seleccione una fila, en la parte derecha se mostrarán los detalles del link (nombre, descripción y autor) y el botón “Navegar” permitirá navegar al link seleccionado.


### Imagen AFLM - Health
Vista de links de salud. Vista en la que se mostrarán los links de salud. El botón “Volver” navegará a la página de inicio. En la cuadrícula de la parte izquierda se mostrará la relación de links de salud. Cuando se seleccione una fila, en la parte derecha se mostrarán los detalles del link (nombre, descripción y autor) y el botón “Navegar” permitirá navegar al link seleccionado.


### Imagen AFLM - Rules
Vista de recordatorio de reglas. Vista que se mostrará cuando no se cumpla la regla de navegación. El botón “Volver” regresará a la página de inicio.


## REGLAS DE LA ASOCIACIÓN
El orden de disfrute de los links siempre será el siguiente:
- Primero los links de animales
- Después los de libros
- Después los de música
- Y por último los de salud

En la web, la AFLM quiere que sus asociados no puedan navegar a una vista de orden superior, si previamente no se ha navegado a las vistas de orden inferior.
Si no se cumple la regla, se mostrará la página de recordatorio de reglas.

Ejemplo: no se podrá navegar a la vista de links de música si previamente no se ha navegado a las vista de links de libros y de animales.


## OTROS
En nuestra conversación con el presidente de la asociación, nos comentó que un primo suyo -que está a la última en temas de nuevas tecnologías-, le ha hablado de Angular, HTML5 y otras tecnologías relacionadas con el front-end, por lo que quiere que su web también esté a la última y luzca lo mejor del front-end. Pero que no quiere que se incorporen “cosas” de terceras partes, sino que quiere que todo el desarrollo sea original.
IMPLEMENTACIÓN

Deberás crear una web en Angular que cumpla con el diseño y la regla que nos han proporcionado y sin usar ningún framework gráfico externo (como Bootstrap). La implementación deberá contar con elementos habituales de las aplicaciones Angular: componentes, servicios, routing, etc.

Los datos los puedes extraer de los siguientes enlaces:

Links de animales: https://api.publicapis.org/entries?category=animals
Links de libros: https://api.publicapis.org/entries?category=books
Links de Música: https://api.publicapis.org/entries?category=music
Links de Salud: https://api.publicapis.org/entries?category=health

Estos enlaces proporcionan un JSON con la siguiente estructura:
{
	count: number;
	entries: object[];
}

Cada objeto de la propiedad “entries” tiene la siguiente estructura:
{
API: string;
Description: string;
Auth: string;
HTTPS: boolean;
Cors: string;
Link: string;
Category: string;
}


## ¿Como entregar la solución?
Podrás entregar tu solución, enviándola por email en un zip a people@voxelgroup.net.

