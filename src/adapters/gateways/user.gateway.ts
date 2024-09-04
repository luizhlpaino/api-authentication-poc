import { UserGatewayInterface } from "core/application/gateways/user.gateway";
import { User } from "core/domain/models/user";
import { UserRepositoryInterface } from "./ports/user.repository";
import { UUID } from "crypto";

export class UserGateway implements UserGatewayInterface {
    private _userRepository: UserRepositoryInterface;
    
    constructor(userRepository: UserRepositoryInterface) {
        this._userRepository = userRepository;
    }

    async save(newUser: User): Promise<void> {
        return await this._userRepository.insert(newUser);
    }

    async getOneById(userId: UUID): Promise<User> {
        return await this._userRepository.getOneById(userId);
    }

}