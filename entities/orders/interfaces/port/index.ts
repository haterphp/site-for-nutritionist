import { IUser } from "@/shared/interfaces";
import { OrderStatus } from "../../enum";
import { IOrderProductEntity } from "../entities";

interface ICreateOrderPort {
    user: IUser['id']
    address: string
    phone?: string
    deliveryTime: string,
    status: OrderStatus
    products: Omit<IOrderProductEntity, 'id'>[]
}

type CreateOrderFormData = Pick<ICreateOrderPort, 'address' | 'deliveryTime' | 'phone'>

export type { ICreateOrderPort, CreateOrderFormData }