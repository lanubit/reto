export class EntityUtil {

    entity;
    keys;

    constructor(
        entity: object,
        keys: object
    ) {
        this.entity = entity;
        this.keys = keys;
    }

    public async changeEnglishToSpanish(): Promise<object>{
        const objectKeys = Object.keys(this.entity);
        let result = {};
        objectKeys.forEach(key => {
            result[this.keys[key]] = this.entity[key];
        });
        return result;
    }
}