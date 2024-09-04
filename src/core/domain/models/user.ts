import { UUID } from "crypto";

export class User {    
    constructor(
        public id: UUID, 
        public name: string,
        public email: string
    ){
        this.validate();
    }
    
    validate() {
        try {
            if(!this.email.includes("@"))
                throw Error("the user email must be a valid email address");
        }        
        catch(e) {
            throw e;
        }
    }
}