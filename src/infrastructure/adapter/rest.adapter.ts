import Axios from "axios";

export class RestAdapter{

    public async get(uri:string, params?: object) {
        const result = await Axios.get(uri, params);
        return result.data.results;
    }

}