export class VehicleEntity{

    private id: string;
    private vehicle_name: string;
    private model: string;
    private manufacturer: string;
    private cost_in_credits: string;
    private vehicle_length: string;
    private max_atmosphering_speed: string;
    private crew: string;
    private passengers: string;
    private cargo_capacity: string;
    private consumables: string;
    private vehicle_class:string;
    private pilots: string[];
    private films: string[];
    private created: string;
    private edited: string;
    private url: string;

    /**
     * @param id
     * @param vehicle_name
     * @param model
     * @param manufacturer
     * @param cost_in_credits
     * @param vehicle_length
     * @param max_atmosphering_speed
     * @param crew
     * @param passengers
     * @param cargo_capacity
     * @param consumables
     * @param vehicle_class
     * @param pilots
     * @param films
     * @param created
     * @param edited
     * @param url
     */
    constructor(
        id: string,
        vehicle_name: string,
        model: string,
        manufacturer: string,
        cost_in_credits: string,
        vehicle_length: string,
        max_atmosphering_speed: string,
        crew: string,
        passengers: string,
        cargo_capacity: string,
        consumables: string,
        vehicle_class:string,
        pilots: string[],
        films: string[],
        created: string,
        edited: string,
        url: string
    ) {
        this.id = id;
        this.vehicle_name = vehicle_name;
        this.model = model;
        this.manufacturer = manufacturer;
        this.cost_in_credits = cost_in_credits;
        this.vehicle_length = vehicle_length;
        this.max_atmosphering_speed = max_atmosphering_speed;
        this.crew = crew;
        this.passengers = passengers;
        this.cargo_capacity = cargo_capacity;
        this.consumables = consumables;
        this.vehicle_class = vehicle_class;
        this.pilots = pilots;
        this.films = films;
        this.created = created;
        this.edited = edited;
        this.url = url;
    }

    public async parseKey(){
        const object: object = {
            id: 'id',
            vehicle_name: 'nombre',
            model: 'modelo',
            manufacturer: 'fabricante',
            cost_in_credits: 'costo_en_partes',
            vehicle_length: 'tamaño',
            max_atmosphering_speed: 'velocidad_maxima',
            crew: 'tripulacion',
            passengers: 'pasajeros',
            cargo_capacity: 'capacidad_carga',
            consumables: 'consumo',
            vehicle_class: 'tipo_vehiculo',
            pilots: 'pilotos',
            films: 'peliculas',
            created: 'fecha_crecion',
            edited: 'fecha_actualizacion',
            url: 'url'
        };

        return object;
    }
}