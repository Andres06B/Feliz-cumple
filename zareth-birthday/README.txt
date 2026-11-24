REGALO INTERACTIVO PARA ZARETH
===============================

ABRIR
1. Descomprime el ZIP.
2. Abre la carpeta en Visual Studio Code.
3. Abre index.html en el navegador.

ESTE DISEÑO SE SIENTE COMO UN REGALO
- La primera pantalla muestra una caja. Al tocarla, se abre y revela el regalo.
- Dentro hay tarjetas/recuerdos con pestañas, álbum Polaroid, favoritos y carta.
- No hay menú web convencional ni apariencia de sitio corporativo.

DÓNDE AGREGAR IMÁGENES DE SNOOPY
Todas las ubicaciones están marcadas con comentarios en index.html:
- assets/snoopy/snoopy-regalo.png: Snoopy decorando la caja de regalo.
- assets/snoopy/snoopy-cabeza.png: Snoopy pequeño en el encabezado.
- assets/snoopy/snoopy-protagonista.png: imagen grande protagonista en la tarjeta de bienvenida.
- assets/snoopy/woodstock.png: Woodstock decorativo.
- assets/snoopy/snoopy-mini.png: Snoopy pequeño al pie de bienvenida.
- assets/snoopy/snoopy-corazon.png: Snoopy junto a la frase de favoritos.
- assets/snoopy/snoopy-saludando.png: Snoopy saludando en el cierre.

IMPORTANTE: consigue imágenes PNG con fondo transparente para los personajes.
Si tienes otra imagen, puedes conservar el nombre de archivo indicado o cambiar la ruta en el <img> correspondiente de index.html.
Los comentarios HTML señalan cada punto exacto donde puedes insertar/reemplazar imágenes.

FONDO CON TEMÁTICA SNOOPY
- Coloca un fondo o patrón en assets/fondos/fondo-snoopy.jpg.
- En styles.css busca "FONDO SNOOPY DE TODA LA EXPERIENCIA".
- Descomenta las tres líneas background-image/background-size/background-position para activar la imagen.
- Recomendación: patrón suave repetible con Snoopy, Woodstock, huellitas, estrellas y corazones en tonos rosa, crema y beige. Evita una imagen con mucho contraste para que el texto siga legible.

FOTOGRAFÍAS
- Copia fotos en assets/fotos/.
- Edita la lista photos al inicio de script.js.
- Categorías: ella, familia, amigos, momentos.
- Portada opcional: assets/fotos/zareth-portada.jpg (la puedes añadir como foto dentro del contenido si lo deseas).

EDITAR GUSTOS Y CARTA
- En script.js modifica las listas likes y letterParagraphs.
- Puedes añadir o quitar elementos siguiendo el mismo formato.

CONSEJO
Usa PNG transparentes para Snoopy y Woodstock, y JPG para el fondo y las fotos personales.
