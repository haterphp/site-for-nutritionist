import { ICreateCallbackRequestPort } from "../ports";

export interface ICallbackRequestsRepository {
    create(port: ICreateCallbackRequestPort): Promise<void>
}