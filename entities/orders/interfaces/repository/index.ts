import { IOrderEntity } from "../entities";
import { ICreateOrderPort } from "../port";

export interface IOrdersRepository {
    getAll(): Promise<IOrderEntity[]>
    create(port: ICreateOrderPort): Promise<IOrderEntity>
}