import { IUser } from "@/shared/interfaces";
import { IUserRepository } from "../repository";
import { ILoginPort, ISignUpPort } from "../ports";

interface IUserStoreState {
    user: IUser | null
}

interface IUserStoreActions {
    setUser(user: IUser | null): void

    login(port: ILoginPort): Promise<void>
    signUp(port: ISignUpPort): Promise<void>
}

type UserStore = IUserStoreState & IUserStoreActions

export type { UserStore }