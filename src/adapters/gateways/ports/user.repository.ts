import { User } from "core/domain/models/user";
import { UUID } from "crypto";

export interface UserRepositoryInterface {
    insert(newUser: User): Promise<void>;
    getOneById(userId: UUID): Promise<User>;
}