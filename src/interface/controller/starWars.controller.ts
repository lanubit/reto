//import {inject, injectable} from "inversify";
import {Response} from "../util/response";
import {StarWarsService} from "../../core/services/starWars.service";


//@injectable()
export class StarWarsController {

    protected starWarsService;

    constructor(
        //@inject() private vehicleService: VehicleService
    ) {
        //this.vehicleService = vehicleService;
        this.starWarsService = new StarWarsService();
    }
    async getVehicles(event: any) {
        try {
            const result = await this.starWarsService.getVehicles();
            return Response.success(result);
        } catch (err) {
            return Response.error(err.message);
        }
    }

}