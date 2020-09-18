//import {injectable} from "inversify";
import {StarWarsRest} from "../../infrastructure/rest/starWars.rest";
//import {EntityUtil} from "../util/entity.util";

//@injectable()
export class StarWarsService {

    protected starWarsRest;
    constructor() {
        this.starWarsRest = new StarWarsRest();
    }

    async getVehicles(): Promise<any> {
        const vehicles = await this.starWarsRest.getVehicles();
        //const result = (new EntityUtil('VehicleEntity')).changeKeys();
        return vehicles;
    }

}