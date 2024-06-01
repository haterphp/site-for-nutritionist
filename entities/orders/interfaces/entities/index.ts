import { OrderStatus } from "../../enum"

interface IOrderProductEntity {
    id: number
    product: number
    count: number
}

interface IOrderEntity {
    id: string
    status: OrderStatus
    address: string
    products: IOrderProductEntity[]
}

export type { IOrderProductEntity, IOrderEntity }