import { IUser } from "@/shared/interfaces";
import { ILoginPort, ISignUpPort, IUpdateUserPort } from "../ports";

interface IUserStoreState {
    user: IUser | null
}

interface IUserStoreActions {
    setUser(user: IUser | null): void

    login(port: ILoginPort): Promise<void>
    signUp(port: ISignUpPort): Promise<void>
    updateUser(port: Omit<IUpdateUserPort, 'id'>): Promise<void>
}

type UserStore = IUserStoreState & IUserStoreActions

export type { UserStore }