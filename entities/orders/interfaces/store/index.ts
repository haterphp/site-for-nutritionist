import { IOrderEntity } from "../entities"
import { ICreateOrderPort } from "../port"

interface IOrderStoreState {
    entities: IOrderEntity[]
}

interface IOrderStoreActions {
    loadEntities(): void
    create(port: ICreateOrderPort): void
    reset(): void
}

type OrderStore = IOrderStoreState & IOrderStoreActions

export type { OrderStore }