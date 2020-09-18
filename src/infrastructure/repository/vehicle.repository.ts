import {DynamoAdapter} from "../adapter/dynamo.adapter";
import {VehicleDTO} from "../../core/dto/vehicle.DTO";
import {VehicleEntity} from "../../core/entity/vehicle.entity";

export class VehicleRepository extends DynamoAdapter{

    constructor() {
        super();
        this.tableName = process.env.VEHICLE_TABLE;
    }

    async createVehicle(vehicle: VehicleDTO): Promise<VehicleEntity> {
        try {
            const vehicleEntity: VehicleEntity = await this.payloadEntity(vehicle);
            const create = await this.save(vehicleEntity);
            return vehicleEntity;
        } catch (err) {
            console.log(err.code, err.message);
            throw new Error(err.message)
        }
    }

    private async payloadEntity(vehicleDTO: VehicleDTO): Promise<VehicleEntity> {
        return new VehicleEntity(
            vehicleDTO.id,
            vehicleDTO.name,
            vehicleDTO.model,
            vehicleDTO.manufacturer,
            vehicleDTO.cost_in_credits,
            vehicleDTO.length,
            vehicleDTO.max_atmosphering_speed,
            vehicleDTO.crew,
            vehicleDTO.passengers,
            vehicleDTO.cargo_capacity,
            vehicleDTO.consumables,
            vehicleDTO.vehicle_class,
            vehicleDTO.pilots,
            vehicleDTO.films,
            vehicleDTO.created,
            vehicleDTO.edited,
            vehicleDTO.url
        );
    }

}