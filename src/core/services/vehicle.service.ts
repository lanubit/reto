//import {injectable} from "inversify";
import * as uuid from 'uuid';
import {VehicleDTO} from "../dto/vehicle.DTO";
import {VehicleRepository} from "../../infrastructure/repository/vehicle.repository";
import {VehicleEntity} from "../entity/vehicle.entity";
import {EntityUtil} from "../util/entity.util";

//@injectable()
export class VehicleService {

    protected vehicleRepository;
    constructor() {
        this.vehicleRepository = new VehicleRepository();
    }

    async newVehicle(vehicleDTO: VehicleDTO): Promise<any> {
        const vehicle:VehicleEntity = await this.vehicleRepository.createVehicle(
            await this.payloadVehicle(vehicleDTO)
        );
        return await this.formatResult(vehicle);
    }

    private async payloadVehicle(vehicleDTO: VehicleDTO): Promise<VehicleDTO> {
        vehicleDTO.id = uuid.v1();
        return vehicleDTO;
    }

    private async formatResult(vehicle: VehicleEntity) {
        const entityUtil = (new EntityUtil(vehicle,  await vehicle.parseKey()));
        return await entityUtil.changeEnglishToSpanish();
    }
}