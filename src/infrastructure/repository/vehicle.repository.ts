import {DynamoAdapter} from "../adapter/dynamo.adapter";
import {VehicleDTO} from "../../core/dto/vehicle.DTO";
import {VehicleEntity} from "../../core/entity/vehicle.entity";
import {VehicleInterface} from "../interface/vehicle.interface";
//import {injectable} from "inversify";


//@injectable()
export class VehicleRepository extends DynamoAdapter implements VehicleInterface{

    constructor() {
        super();
        this.tableName = process.env.VEHICLE_TABLE;
    }

    async createVehicle(vehicle: VehicleDTO): Promise<VehicleEntity> {
        try {
            const vehicleEntity: VehicleEntity = await this.payloadEntity(vehicle);
            const create = await this.save(vehicleEntity);
            console.log('----insert dynamo----', create);
            return vehicleEntity;
        } catch (err) {
            console.log(err.code, err.message);
            throw new Error(err.message)
        }
    }

    async list(): Promise<VehicleEntity[]> {
        try {
            const items = "id, vehicle_name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, vehicle_class, pilots, films, created, edited, url";
            const list = await this.get(items);
            console.log('----list dynamo----', list);
            return list;
        } catch (err) {
            console.log('-------ERROR LECTURA---');
            console.log(err.code, err.message);
            console.log(err);
            console.log('-------END ERROR LECTURA---');
            throw new Error(err.message)
        }
    }

    private async payloadEntity(vehicleDTO: VehicleDTO): Promise<VehicleEntity> {
        return new VehicleEntity(
            vehicleDTO.id,
            vehicleDTO.vehicle_name,
            vehicleDTO.model,
            vehicleDTO.manufacturer,
            vehicleDTO.cost_in_credits,
            vehicleDTO.vehicle_name,
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