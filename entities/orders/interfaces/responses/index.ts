import { IGetAllResponse, IGetOneResponse, IResponseItem, StrapiAttributes } from "@/shared/interfaces"
import { OrderStatus } from "../../enum"
import { IGetOneCatalogItemsResponse } from "@/entities/catalog"

interface IOrderProductAttribute {
    count: number
    product: IGetOneCatalogItemsResponse
}

interface Attributes extends StrapiAttributes {
    status: OrderStatus
    products: IOrderProductAttribute[]
    address: string
    phone?: string
    deliveryTime: Date
    createdAt: string
}

export type OrderResponseItem = IResponseItem<Attributes>
export type IGetOneOrder = IGetOneResponse<OrderResponseItem> 
export type IGetAllOrders = IGetAllResponse<OrderResponseItem>