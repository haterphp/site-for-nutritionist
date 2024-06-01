import { HttpAppService } from "@/shared/utils";
import { ICreateOrderPort, IOrderEntity, IOrdersRepository } from "../interfaces";

export class OrderRepository implements IOrdersRepository {
    public getAll(): Promise<IOrderEntity[]> {
        return Promise.resolve([])
    }

    public async create(data: ICreateOrderPort): Promise<IOrderEntity> {
        if (data.phone === "") delete data.phone
        return HttpAppService.post('/api/orders', { body: { data } })
    }
}