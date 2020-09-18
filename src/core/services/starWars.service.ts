//import {injectable} from "inversify";
import {StarWarsRest} from "../../infrastructure/rest/starWars.rest";
import {VehicleEntity} from "../entity/vehicle.entity";
import {EntityUtil} from "../util/entity.util";
//import {EntityUtil} from "../util/entity.util";

//@injectable()
export class StarWarsService {

    protected starWarsRest;
    constructor() {
        this.starWarsRest = new StarWarsRest();
    }

    async getVehicles(): Promise<any> {
        const vehicles:VehicleEntity[] = await this.starWarsRest.getVehicles();
        return  await this.formatResult(vehicles);
    }

    private async formatResult(vehicles: VehicleEntity[]) {
        let result = [];

        for (const vehicle of vehicles) {
            const entityUtil = (new EntityUtil(vehicle,  await vehicle.parseKey()));
            const changeResult = await entityUtil.changeEnglishToSpanish();
            result.push(changeResult)
        }

        return result;
    }
}