import {APIGatewayProxyHandler} from 'aws-lambda';
import 'source-map-support/register';
import {HttpUtil} from "../util/http.util";
import {StarWarsController} from "../controller/starWars.controller";

export const getVehicles: APIGatewayProxyHandler = async (event, _context) => {
    const vehicles = await (new StarWarsController()).getVehicles(event);
    const success: boolean = (vehicles.code == HttpUtil.success_api_code);
    const statusCode: number = success ? HttpUtil.http_ok_code : HttpUtil.http_error_code;
    return {
        statusCode: statusCode,
        body: JSON.stringify(vehicles, null, 2)
    };
};
