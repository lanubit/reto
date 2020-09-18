import {APIGatewayProxyHandler} from 'aws-lambda';
import 'source-map-support/register';
import {VehicleController} from "../controller/vehicle.controller";
import {HttpUtil} from "../util/http.util";

export const create: APIGatewayProxyHandler = async (event, _context) => {
    const vehicle = await (new VehicleController()).create(event);

    const success: boolean = (vehicle.code == HttpUtil.success_api_code);

    const statusCode: number = success ? HttpUtil.http_ok_code : HttpUtil.http_error_code;
    return {
        statusCode: statusCode,
        body: JSON.stringify(vehicle, null, 2)
    };
};

export const list: APIGatewayProxyHandler = async (event, _context) => {
    const vehicles = await (new VehicleController()).list(event);

    const success: boolean = (vehicles.code == HttpUtil.success_api_code);

    const statusCode: number = success ? HttpUtil.http_ok_code : HttpUtil.http_error_code;
    return {
        statusCode: statusCode,
        body: JSON.stringify(vehicles, null, 2)
    };
};

