import { IUser } from "@/shared/interfaces";
import { AuthUserResponse } from "../interfaces/responses";

export class TransformUserPipe {
    public static tranform(user: AuthUserResponse): IUser {
        return {
            id: user.id,
            name: user.username,
            login: user.email,
            avatar: undefined 
        }
    }
}