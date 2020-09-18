import {VehicleDTO} from "../../core/dto/vehicle.DTO";
//import {inject, injectable} from "inversify";
import {VehicleService} from "../../core/services/vehicle.service";
import {Response} from "../util/response";


//@injectable()
export class VehicleController {

    protected vehicleService;

    constructor(
        //@inject() private vehicleService: VehicleService
    ) {
        //this.vehicleService = vehicleService;
        this.vehicleService = new VehicleService();
    }
    async create(event: any) {
        const params: VehicleDTO = JSON.parse(event.body);
        try {
            const result = await this.vehicleService.newVehicle(params);
            return Response.success(result);
        } catch (err) {
            return Response.error(err.message);
        }
    }

    async list(event: any) {
        try {
            const result = await this.vehicleService.list();
            return Response.success(result);
        } catch (err) {
            return Response.error(err.message);
        }
    }

}