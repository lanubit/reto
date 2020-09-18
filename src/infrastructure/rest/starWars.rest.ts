import {RestAdapter} from "../adapter/rest.adapter";
import {VehicleEntity} from "../../core/entity/vehicle.entity";

export class StarWarsRest extends RestAdapter{

    basePath = null;
    constructor() {
        super();
        this.basePath = process.env.STAR_WARS_API;
    }

    public async getVehicles():Promise<VehicleEntity[]> {
        try {
            const uri = `${this.basePath}vehicles/`;
            const result = await this.get(uri);
            return await this.populateVehicleEntity(result);
        } catch (err) {
            console.log(err.code, err.message);
            throw new Error(err.message)
        }
    }

    public async populateVehicleEntity(vehicles): Promise<VehicleEntity[]> {
        let entities = [];
        vehicles.forEach(vehicle => {
            entities.push(
                new VehicleEntity(
                    vehicle.id,
                    vehicle.name,
                    vehicle.model,
                    vehicle.manufacturer,
                    vehicle.cost_in_credits,
                    vehicle.length,
                    vehicle.max_atmosphering_speed,
                    vehicle.crew,
                    vehicle.passengers,
                    vehicle.cargo_capacity,
                    vehicle.consumables,
                    vehicle.vehicle_class,
                    vehicle.pilots,
                    vehicle.films,
                    vehicle.created,
                    vehicle.edited,
                    vehicle.url
                )
            )
        });

        return entities;
    }
}
