<!-- omit in toc -->

# Notes API

- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Uso del Módulo HTTP de Node.js](#uso-del-módulo-http-de-nodejs)
- [Operaciones de Archivo con fs/promises](#operaciones-de-archivo-con-fspromises)
- [Instalación y Ejecución](#instalación-y-ejecución)
  - [Instalación de Dependencias](#instalación-de-dependencias)
  - [Ejecucion](#ejecucion)
- [Uso de Insomnia para Consultas a la API](#uso-de-insomnia-para-consultas-a-la-api)
  - [Pasos para Importar la Colección en Insomnia](#pasos-para-importar-la-colección-en-insomnia)

**Notes API** es una aplicación backend sencilla desarrollada en Node.js. Este proyecto proporciona una API para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una base de datos simple almacenada en un archivo JSON.

## Tecnologías Utilizadas

- **Node.js**: La aplicación se desarrolla utilizando Node.js, sin frameworks adicionales, aprovechando su módulo HTTP integrado para manejar las solicitudes y respuestas HTTP.
- **Filesystem (fs/promises)**: Se utiliza el módulo `fs/promises` de Node.js para interactuar con el sistema de archivos, específicamente para leer y escribir en un archivo `notes.json` que actúa como nuestra base de datos.

## Funcionalidades

La **Notes API** ofrece las siguientes operaciones CRUD:

1. **Crear una Nota**: Añadir una nueva nota a la base de datos `notes.json`.
2. **Leer Notas**: Recuperar todas las notas almacenadas o una nota específica por su ID.
3. **Actualizar una Nota**: Modificar el contenido de una nota existente en la base de datos.
4. **Eliminar una Nota**: Eliminar una nota de la base de datos.

## Uso del Módulo HTTP de Node.js

La aplicación utiliza únicamente el módulo HTTP de Node.js para crear un servidor que escucha y responde a las solicitudes HTTP. Esto incluye el manejo de diferentes rutas para las operaciones CRUD mencionadas anteriormente.

## Operaciones de Archivo con fs/promises

El archivo `notes.json` se utiliza como una base de datos simple, donde cada nota se almacena como un objeto dentro de un array. Para interactuar con este archivo, se emplean las funciones `readFile` y `writeFile` del módulo `fs/promises`:

- **readFile**: Para leer el contenido del archivo `notes.json` y convertirlo en un formato JSON manejable dentro de la aplicación.
- **writeFile**: Para escribir los cambios realizados en el array de notas de vuelta al archivo `notes.json`, asegurando que los datos estén siempre actualizados.

## Instalación y Ejecución

Para instalar las dependencias del proyecto y ejecutar la aplicación en modo de desarrollo, sigue estos pasos:

### Instalación de Dependencias

Ejecuta el siguiente comando para instalar todas las dependencias necesarias para el proyecto:

```sh
npm install
```

### Ejecucion

Ejecuta el siguiente comando para iniciar el servidor

```sh
npm run dev
```

## Uso de Insomnia para Consultas a la API

Para facilitar las pruebas y consultas a la API, puedes utilizar el archivo `Insomnia-Notes.json` que se encuentra en el repositorio. Este archivo contiene una colección predefinida de solicitudes que puedes importar en Insomnia.

### Pasos para Importar la Colección en Insomnia

1. **Descargar e Instalar Insomnia**:

   - Si aún no tienes Insomnia instalado, puedes descargarlo e instalarlo desde [aquí](https://insomnia.rest/download).

2. **Importar la Colección**:

   - Abre Insomnia.
   - Haz clic en el botón de menú en la esquina superior izquierda y selecciona `Import/Export`.
   - Selecciona `Import Data` y luego `From File`.
   - Navega hasta el archivo `Insomnia-Notes.json` en tu repositorio y selecciónalo.

3. **Usar las Solicitudes**:
   - Una vez importada la colección, verás una lista de solicitudes predefinidas para interactuar con la API.
   - Puedes ejecutar estas solicitudes directamente o modificarlas según tus necesidades.
