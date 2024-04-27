import { ILoginPort, ISignUpPort, IUserRepository } from "../interfaces";

export class UserRepository implements IUserRepository {
    public async login(data: ILoginPort): Promise<void> {
        console.log(data)
    }

    public async signUp(data: ISignUpPort): Promise<void> {
        console.log(data)
    }
}