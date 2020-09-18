# Reto Serverless

Serverless desarrollado en nodejs con typescript.

El proyecto consta de 2 recursos

[GET]

    * {BASE_PATH}/star-wars-vehicles
    
  Obtine un listado de vehículos traidos desde el endpoint https://swapi.py4e.com/api/vehicles/
   
    * Ejemplo de os objetos
    
    {
    	"id": "6edd6ba0-f9d0-11ea-8592-1d901b02429a",
        "nombre": "Sand Crawler",
        "modelo": "Digger Crawler",
        "fabricante": "Corellia Mining Corporation",
        "costo_en_partes": "150000",
        "tamaño": "Sand Crawler",
        "velocidad_maxima": "30",
        "tripulacion": "46",
        "pasajeros": "30",
        "capacidad_carga": "50000",
        "consumo": "2 months",
        "tipo_vehiculo": "wheeled",
        "pilotos": [
          "https://swapi.py4e.com/api/films/1/",
          "https://swapi.py4e.com/api/films/5/"
        ],
        "peliculas": [
          "https://swapi.py4e.com/api/films/1/",
          "https://swapi.py4e.com/api/films/5/"
        ],
        "fecha_crecion": "2014-12-10T15:36:25.724000Z",
        "fecha_actualizacion": "2014-12-20T21:30:21.661000Z",
        "url": "https://swapi.py4e.com/api/vehicles/4/"
    }

[GET]

    * {BASE_PATH}/vehicles
    
  Obtine un listado de vehículos traidos desde dynamoDB **SIN TERMINAR**
  
[POST]

    * {BASE_PATH}/vehicles
    
  Guarda un nuevo objeto en a tabla "vehicle-reto-dev" que se crea en la región Virginia de la cuenta configurada en awscli

    * Ejemplo de input
    
    {
        "vehicle_name": "Sand Crawler",
        "model": "Digger Crawler",
        "manufacturer": "Corellia Mining Corporation",
        "cost_in_credits": "150000",
        "vehicle_length": "36.8 ",
        "max_atmosphering_speed": "30",
        "crew": "46",
        "passengers": "30",
        "cargo_capacity": "50000",
        "consumables": "2 months",
        "vehicle_class": "wheeled",
        "pilots": [
            "https://swapi.py4e.com/api/films/1/",
            "https://swapi.py4e.com/api/films/5/"
            ],
        "films": [
            "https://swapi.py4e.com/api/films/1/",
            "https://swapi.py4e.com/api/films/5/"
        ],
        "created": "2014-12-10T15:36:25.724000Z",
        "edited": "2014-12-20T21:30:21.661000Z",
        "url": "https://swapi.py4e.com/api/vehicles/4/"
    }
    
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

