import { IUser } from "@/shared/interfaces";

interface IUserStoreState {
    user: IUser | null
}

interface IUserStoreActions {
    setUser(user: IUser | null): void
}

type UserStore = IUserStoreState & IUserStoreActions

export type { UserStore }