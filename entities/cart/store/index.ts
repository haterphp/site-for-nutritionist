import { create, useStore } from "zustand";

import { CartStore, ICartItemEntity } from "../interfaces";
import { CartRepository } from "../repository";

const repository = new CartRepository()

export const cartStore = create<CartStore>()((set, get) => ({
    entities: repository.getAll(),

    add: (payload) => {
        const entity: ICartItemEntity = { id: Math.random().toString(), ...payload }
        const entities = get().entities.concat(entity)

        repository.emit(entities)
        set((prev) => ({ ...prev, entities }))
    },

    remove: (id) => {
        const entities = get().entities
        const index = entities.findIndex(item => item.id === id)

        if (index !== -1) {
            const newEntities = [
                ...entities.slice(0, index),
                ...entities.slice(index + 1)
            ]

            repository.emit(newEntities)
            set((prev) => ({ ...prev, entities: newEntities }))
        }
    },

    update: (payload) => {
        const entities = get().entities
        const index = entities.findIndex(item => item.id === payload.id)

        if (index !== -1) {
            const newEntities = [
                ...entities.slice(0, index),
                payload,
                ...entities.slice(index + 1)
            ]
            
            repository.emit(newEntities)
            set((prev) => ({ ...prev, entities: newEntities }))
        }
    },

    reset: () => {
        repository.reset()
        set((prev) => ({ ...prev, entities: [] }))
    },
}))

export const useCartStore = <T, >(
    selector: (store: CartStore) => T
): T => useStore(cartStore, selector)