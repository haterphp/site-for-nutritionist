import { IUser } from "@/shared/interfaces";
import { IUserRepository } from "../repository";

interface IUserStoreState {
    user: IUser | null
}

interface IUserStoreActions extends IUserRepository {
    setUser(user: IUser | null): void
}

type UserStore = IUserStoreState & IUserStoreActions

export type { UserStore }