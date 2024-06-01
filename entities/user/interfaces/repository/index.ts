import { ILoginPort, ISignUpPort, IUpdateUserPort } from "../ports";
import { AuthUserResponse } from "../responses";

export interface IUserRepository {
    getMe(): Promise<AuthUserResponse>
    login(data: ILoginPort): Promise<AuthUserResponse>
    signUp(data: ISignUpPort): Promise<void>
    update(data: IUpdateUserPort): Promise<void>
}