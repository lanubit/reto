import {HttpUtil} from "./http.util";

export class Response {
    static success(data: object): ResponseBodyVO {
        const code: number = HttpUtil.success_api_code;
        const message: string = HttpUtil.success_message;
        return {
            code: code,
            message: message,
            data: data
        }
    }

    static error(message: string): ResponseBodyVO {
        const code: number = HttpUtil.error_api_code;
        return {
            code: code,
            message: message
        }
    }
}

export class ResponseBodyVO {
    code: number;
    message: string;
    data?: object;
}
