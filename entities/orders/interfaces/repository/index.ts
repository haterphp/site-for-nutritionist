import { IUser } from "@/shared/interfaces";
import { IOrderEntity } from "../entities";
import { ICreateOrderPort } from "../port";

export interface IOrdersRepository {
    getAll(userId: IUser['id']): Promise<IOrderEntity[]>
    create(port: ICreateOrderPort): Promise<IOrderEntity>
}