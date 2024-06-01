import { IUser } from "@/shared/interfaces";
import { OrderStatus } from "../../enum";
import { ICreateOrderProductEntity } from "../entities";

interface ICreateOrderPort {
    user: IUser['id']
    address: string
    phone?: string
    deliveryTime: string,
    status: OrderStatus
    products: ICreateOrderProductEntity[]
}

type CreateOrderFormData = Pick<ICreateOrderPort, 'address' | 'deliveryTime' | 'phone'>

export type { ICreateOrderPort, CreateOrderFormData }