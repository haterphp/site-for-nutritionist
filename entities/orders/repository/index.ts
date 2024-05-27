import { HttpAppService } from "@/shared/utils";
import { ICreateOrderPort, IOrdersRepository } from "../interfaces";

export class OrderRepository implements IOrdersRepository {
    public async create(data: ICreateOrderPort): Promise<void> {
        await HttpAppService.post('/api/orders', { body: { data } })
    }
}