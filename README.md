# Installation

## Docker

Ejecutar el siguiente comando en la terminal para levantar la aplicación sin installar Node.js en el host

- Windows

```bash
docker run --name test --rm -v ${PWD}:/app -it node:14.20 node ./app/src/calculadora.js
```

- Linux
```bash
docker run --name test --rm -v .:/app -it node:14.20 node ./app/src/calculadora.js
```

# Más información

<div align="center">

[GitHub]("https://github.com/alpalasaul") 

`<kryptondev/>`

</div>
