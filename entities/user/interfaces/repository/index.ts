import { ILoginPort, ISignUpPort } from "../ports";
import { AuthUserResponse } from "../responses";

export interface IUserRepository {
    getMe(): Promise<AuthUserResponse>
    login(data: ILoginPort): Promise<AuthUserResponse>
    signUp(data: ISignUpPort): Promise<void>
}