//import {injectable} from "inversify";
import * as uuid from 'uuid';
import {VehicleDTO} from "../dto/vehicle.DTO";
import {VehicleRepository} from "../../infrastructure/repository/vehicle.repository";
import {VehicleEntity} from "../entity/vehicle.entity";

//@injectable()
export class VehicleService {

    protected vehicleRepository;
    constructor() {
        this.vehicleRepository = new VehicleRepository();
    }

    async newVehicle(vehicleDTO: VehicleDTO): Promise<VehicleEntity> {
        return this.vehicleRepository.createVehicle(
            await this.payloadVehicle(vehicleDTO)
        );
    }

    private async payloadVehicle(vehicleDTO: VehicleDTO): Promise<VehicleDTO> {
        vehicleDTO.id = uuid.v1();
        return vehicleDTO;
    }
}