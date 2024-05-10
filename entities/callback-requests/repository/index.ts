import { HttpAppService } from "@/shared/utils";
import { ICallbackRequestsRepository, ICreateCallbackRequestPort } from "../interfaces";

export class CallbackRequestsRepository implements ICallbackRequestsRepository {
    public async create(data: ICreateCallbackRequestPort): Promise<void> {
        await HttpAppService.post('/api/callback-requests', { body: { data } })
    }
}