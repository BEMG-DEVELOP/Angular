# Angular
Haciendo un proyecto de angular , iniciando en este framework

# Tutorial

El proyecto a sido generado [Angular CLI](https://github.com/angular/angular-cli) con la 
version 12.2.5.

Estamos  siguiendo el curso en youtube de LeParadoxHD [Angular10](https://www.youtube.com/watch?v=SZtxwDAqEok&list=PLezsbUDiwcpmhNiMzVPYJXV0Rqn71G4PU&index=1&t=8s)

Los titulos de los commits diran que capitulo es el que se esta desarrollado.

## Development server

Ejecutar el siguiente comando `ng serve` para ejecutar el servidor. Navegando en `http://localhost:4200/`. Cada cambio que se realice automaticamente el servidor refrescara el navegador
para poder ver los cambios.

## Code scaffolding

Ejecutar el comando `ng generate component component-name` para generar un nuevo componente.

Cuando creamos un componentes se crearan  4 archivos en la carpeta app:

 ->Un html
 ->Un css (Una hoja de estilos),
 ->Un spec(test)
 ->Un ts (Funcionalidad logica)

Para que el usuario pueda visualizar los cambios debemos agregar el nombre del componente
(ubicado en el archivo ts en la variable `Selector`) en el archivo app.component.html o en el index.html

El archivo .ts es muy importante, por que en el van los archivos importados, variables , funciones y toda la logica de ese 
componente.


 Tambien puede usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

