import { IUser } from "@/shared/interfaces";
import { OrderStatus } from "../../enum";
import { IOrderProductEntity } from "../entities";

export interface ICreateOrderPort {
    user: IUser['id']
    address: string
    status: OrderStatus
    products: Omit<IOrderProductEntity, 'id'>[]
}