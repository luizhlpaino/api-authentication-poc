import { UserRepositoryInterface } from "adapters/gateways/ports/user.repository";
import { User } from "core/domain/models/user";
import { UUID } from "crypto";

export class UserRepository implements UserRepositoryInterface {
    constructor() {
        
    }

    insert(newUser: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getOneById(userId: UUID): Promise<User> {
        throw new Error("Method not implemented.");
    }
}