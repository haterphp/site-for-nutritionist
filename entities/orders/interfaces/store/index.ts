import { IOrderEntity } from "../entities"

interface IOrderStoreState {
    entities: IOrderEntity[]
}

interface IOrderStoreActions {
    loadEntities(): void
    reset(): void
}

type OrderStore = IOrderStoreState & IOrderStoreActions

export type { OrderStore }