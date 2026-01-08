# Búsqueda de APIs y Presentación de Datos Dinámica

## Descripción del proyecto
Este proyecto ha sido desarrollado como parte del módulo de Desarrollo Web en Entorno Cliente (2º DAW). Consiste en una aplicación web que consume datos de la API pública de "Rick and Morty" para mostrar una galería interactiva de personajes. El objetivo principal es poner en práctica el uso de peticiones asíncronas mediante `fetch` y la manipulación dinámica del DOM para presentar información de forma visual y atractiva.

## Análisis de la API seleccionada
Para la realización de esta práctica se ha optado por la **Rick and Morty API**, una herramienta robusta para el aprendizaje del consumo de datos. A continuación, se detallan sus características principales:

* **¿Qué tipo de datos ofrece?** Proporciona información estructurada sobre los personajes de la serie, incluyendo imágenes, especies, estados vitales (vivo/muerto) y su origen.
* **¿Es necesaria una API Key?** No, esta API es de acceso libre y gratuito, lo que permite realizar consultas sin necesidad de registro o claves de autenticación.
* **¿Cómo se estructura una solicitud?** * **URL Base:** `https://rickandmortyapi.com/api/character`
    * **Método HTTP:** Se utiliza el método **GET** para la obtención de datos.
    * **Parámetros:** Permite el uso de parámetros de consulta (query strings) para filtrar resultados, como por ejemplo `?name=` para búsquedas por nombre.

## Requisitos técnicos implementados
La aplicación cumple con los siguientes estándares solicitados:
1.  **Comunicación asíncrona:** Se ha implementado el uso de `fetch` junto con la sintaxis moderna `async/await` para una gestión eficiente de las respuestas.
2.  **Procesamiento de datos:** La información recibida en formato **JSON** es procesada para extraer únicamente los atributos relevantes de cada personaje.
3.  **Interfaz dinámica:** La web genera tarjetas (cards) visuales de forma automática y permite realizar búsquedas en tiempo real sin necesidad de recargar la página.

## Enlaces y ejemplos de uso
* **URL de la API utilizada:** [https://rickandmortyapi.com/api/](https://rickandmortyapi.com/api/)
* **Ejemplo de consulta de prueba:** `https://rickandmortyapi.com/api/character/?name=rick`

## Problemas encontrados y soluciones
Durante el proceso de desarrollo se presentaron los siguientes desafíos:
* **Gestión de búsquedas fallidas:** Inicialmente, si un usuario buscaba un nombre que no existía, la consola mostraba un error pero la interfaz quedaba vacía. Se solucionó implementando un bloque `try...catch` y una validación de `response.ok`, permitiendo mostrar un mensaje de "No hay resultados" al usuario.
* **Estética y usabilidad:** Para evitar que la página se viera desordenada al cargar muchos datos, se utilizó un sistema de **CSS Grid** que adapta el número de tarjetas automáticamente según el tamaño de la pantalla del dispositivo.

---
*Proyecto educativo para el Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web.*