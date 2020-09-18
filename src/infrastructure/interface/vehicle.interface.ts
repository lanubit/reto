import {VehicleDTO} from "../../core/dto/vehicle.DTO";
import {VehicleEntity} from "../../core/entity/vehicle.entity";

export interface VehicleInterface {
    createVehicle(vehicle: VehicleDTO): Promise<VehicleEntity>;
    list(): Promise<VehicleEntity[]>;
}