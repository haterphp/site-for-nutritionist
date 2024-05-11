import { ICartItemEntity } from "../entities"

interface ICartStoreState {
    entities: ICartItemEntity[]
}

interface ICartStoreActions {
    add(paylod: Omit<ICartItemEntity, 'id'>): void
    remove(id: ICartItemEntity['id']): void
    update(payload: ICartItemEntity): void

    reset(): void
}

type CartStore = ICartStoreState & ICartStoreActions

export type { CartStore }