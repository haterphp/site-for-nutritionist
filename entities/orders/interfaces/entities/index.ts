import { OrderStatus } from "../../enum"

interface ICreateOrderProductEntity {
    product: number
    count: number
}

interface IOrderProductEntity {
    id: number
    title: string
    url: string
    count: number
}

interface IOrderEntity {
    id: string
    status: OrderStatus
    address: string
    products: IOrderProductEntity[]
}

export type { ICreateOrderProductEntity, IOrderEntity }