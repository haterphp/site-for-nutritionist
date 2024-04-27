import { ILoginPort, ISignUpPort } from "../ports";

export interface IUserRepository {
    login(data: ILoginPort): Promise<void>
    signUp(data: ISignUpPort): Promise<void>
}