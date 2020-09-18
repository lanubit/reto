# Reto Serverless

Serverless desarrollado en nodejs con typescript.

El proyecto consta de 2 recursos

[GET]

    * {BASE_PATH}/star-wars-vehicles
    
  Obtine un listado de vehículos traidos desde el endpoint https://swapi.py4e.com/api/vehicles/
  
[POST]

    * {BASE_PATH}/vehicles
    
  Guarda un nuevo objeto en a tabla "vehicle-reto-dev" que se crea en la región Virginia de la cuenta configurada en awscli

### Requisitos (Instalar y/o configurar)

    * npm
    * awscli
    * NodeJs
    * serverless
    
### Instalación

Pasos para la instalación

##### Ejecutar los comandos

    * npm install
    * npm run deploy

