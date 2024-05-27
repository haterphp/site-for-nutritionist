import { ICreateOrderPort } from "../port";

export interface IOrdersRepository {
    create(port: ICreateOrderPort): Promise<void>
}