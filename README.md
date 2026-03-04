# Lectura Activa: Actualizacion de la Enciclopedia

Aplicacion web estatica para trabajo academico de lectura critica.  
Incluye glosas hipertextuales, modal de anotaciones, mapa de competencias y una seccion interactiva de selecciones contextuales.

## Tecnologias

- HTML5
- CSS3
- JavaScript (vanilla)
- Google Fonts (carga externa)

## Estructura del proyecto

```text
.
├── index.html
├── styles.css
├── app.js
├── Gemini_Generated_Image_wh16knwh16knwh16.png
├── Gemini_Generated_Image_4qmvxl4qmvxl4qmv.png
├── Gemini_Generated_Image_yl1xghyl1xghyl1x.png
└── assets/
    └── header/
        └── libro-surrealista.jpg
```

## Como ejecutar localmente

No requiere build ni dependencias.

1. Entra a la carpeta del proyecto.
2. Levanta un servidor estatico:

```bash
python3 -m http.server 5500
```

3. Abre en navegador:

```text
http://localhost:5500
```

## Funcionalidades principales
- Encabezado editorial con composicion visual y movimiento.
- Texto periodistico con glosas clickeables.
- Modal con anotaciones enciclopedicas.
- Diagrama interactivo de competencias (linguistica, enciclopedica, pragmatica).
- Seccion "selecciones contextuales" del leon (selva, circo, zoologico).

## Personalizacion rapida

- Texto principal y contenido: `index.html`
- Estilos, colores, animaciones y responsive: `styles.css`
- Logica interactiva y mapeo de imagenes por contexto: `app.js`

### Cambiar imagen del encabezado

Reemplaza el archivo:

- `assets/header/libro-surrealista.jpg`

o cambia el `src` de las tarjetas del header en `index.html`.

### Cambiar imagenes de selva/circo/zoo

Edita `lionContexts` en `app.js`:

- `selva.imageSrc`
- `circo.imageSrc`
- `zoo.imageSrc`

## Despliegue en GitHub Pages

1. Ve al repositorio en GitHub.
2. Entra a `Settings > Pages`.
3. En `Build and deployment`, selecciona:
   - `Source`: Deploy from a branch
   - `Branch`: `main` y carpeta `/ (root)`
4. Guarda y espera la URL publicada.

## Nota

Este proyecto esta pensado para uso educativo y presentacion academica.
