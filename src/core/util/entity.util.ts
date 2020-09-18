export class EntityUtil {

    className;

    constructor(
        className: string
    ) {
        this.className = className;
        this.changeKeys();
    }

    async changeKeys(){
        console.log(this.className);
    }

}