![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# Individual Project - Henry Pokemon

<img height="150" src="./pokemon.png" />

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `pokemon`

El contenido de `client` fue creado usando: Create React App.

## Testear el proyecto

Una vez creado el archivo `.env`, ejecutar `npm i` en las carpetas `api` y `client`.

Luego de ello, el back estara escuchando en `http://localhost:3001/` y el front en `http://localhost:3000/`

Acceder a la url de front (`http://localhost:3000/`) y a partir de alli podra testear la aplicacion de la manera que desee

## Aun queda pendiente el deploy de esta aplicacion, pero antes tengo que hacer unas mejores y ajustes en ella.