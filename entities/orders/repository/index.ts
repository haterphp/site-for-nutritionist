import { HttpAppService } from "@/shared/utils";
import { ICreateOrderPort, IOrderEntity, IOrdersRepository } from "../interfaces";
import { IGetAllOrders, IGetOneOrder, OrderResponseItem } from "../interfaces/responses";

export class OrderRepository implements IOrdersRepository {
    public getAll(): Promise<IOrderEntity[]> {
        const params = {
            populate: { 0: 'products.product.images' }
        }

        return HttpAppService.get<IGetAllOrders>('/api/orders', { params }).then(({ data }) => {
            return data.map(this._transformToEntity.bind(this))
        })
    }

    public async create(data: ICreateOrderPort): Promise<IOrderEntity> {
        console.log(this)

        if (data.phone === "") delete data.phone

        const params = {
            populate: { 0: 'products.product.images' }
        }

        return HttpAppService.post<IGetOneOrder>('/api/orders', { params, body: { data } })
            .then((payload) => this._transformToEntity(payload.data))
    }
    
    private _transformToEntity(item: OrderResponseItem): IOrderEntity {
        return {
            id: String(item.id),
            address: item.attributes.address,
            status: item.attributes.status,
            products: item.attributes.products.map((p) => {
                const product = p.product.data

                return {
                    id: product.id,
                    count: p.count,
                    title: product.attributes.title,
                    url: process.env.NEXT_PUBLIC_ADMIN_URL + product.attributes.images.data[0].attributes.url,
                }
            })
        }
    }
}