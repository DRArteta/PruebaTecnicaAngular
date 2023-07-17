# Aquí tienes la documentación actualizada indicando el uso de `--force` para algunas dependencias:

# Documentación - Proyecto de Prueba Técnica

Este proyecto es una prueba técnica desarrollada por David Ricardo Arteta Romero para la empresa Inteia del grupo Isa. El proyecto utiliza Angular, TypeScript y el framework Angular Material, además de las grillas responsivas de Bootstrap. A continuación, se detallan los pasos de instalación y uso del proyecto.

## Requisitos previos

Asegúrate de cumplir con los siguientes requisitos antes de ejecutar el proyecto:

- Angular CLI: 16.1.4
- Node: 10.19.0
- @angular-devkit/architect: 0.16.1.4
- @angular-devkit/build-angular: 0.16.1.4
- @angular-devkit/core: 16.1.4
- @angular-devkit/schematics: 16.1.4
- @angular/cdk: 16.1.5
- @angular/cli: 16.1.4
- @angular/material: 16.1.5
- @schematics/angular: 16.1.4
- @schematics/update: 0.16.1.4
- rxjs: 7.8.0
- typescript: 4.9.4

## Instalación

Sigue los siguientes pasos para instalar y configurar el proyecto:

1. Descarga el proyecto desde la ubicación proporcionada por David Ricardo Arteta Romero.

2. Abre una terminal y navega hasta la carpeta del proyecto.

3. Ejecuta el siguiente comando para instalar las dependencias del proyecto:

   ```bash
   npm install --force
   ```

   El uso de `--force` puede ser necesario para forzar la instalación de dependencias incompatibles.

## Uso

Sigue los siguientes pasos para compilar y ejecutar el proyecto:

1. En la misma terminal, asegúrate de estar en la carpeta del proyecto.

2. Ejecuta el siguiente comando para iniciar el servidor de desarrollo:

   ```bash
   npm start
   ```

   Esto iniciará el servidor de desarrollo de Angular y la aplicación estará disponible en la siguiente URL: http://localhost:4200/

3. Para construir la aplicación para producción, ejecuta el siguiente comando:

   ```bash
   npm run build -- --prod
   ```

   Los artefactos de compilación se almacenarán en la carpeta `dist/`.

4. Para ejecutar pruebas unitarias, ejecuta el siguiente comando:

   ```bash
   npm test
   ```

5. Para ejecutar pruebas end-to-end, ejecuta el siguiente comando:

   ```bash
   npm run e2e
   ```

Si necesitas ayuda adicional sobre el Angular CLI, puedes ejecutar el siguiente comando:

```bash
ng help
```

También puedes consultar la página de Descripción General y Referencia de Comandos de Angular CLI para obtener más información y ayuda.
