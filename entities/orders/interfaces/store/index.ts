import { IUser } from "@/shared/interfaces"
import { IOrderEntity } from "../entities"
import { ICreateOrderPort } from "../port"

interface IOrderStoreState {
    entities: IOrderEntity[]
}

interface IOrderStoreActions {
    loadEntities(id: IUser['id']): void
    create(port: ICreateOrderPort): Promise<void>
    reset(): void
}

type OrderStore = IOrderStoreState & IOrderStoreActions

export type { OrderStore }