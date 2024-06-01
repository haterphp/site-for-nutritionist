import { create, useStore } from "zustand";

import { OrderStore } from "../interfaces";
import { OrderRepository } from "../repository";

const repository = new OrderRepository()

export const orderStore = create<OrderStore>()((set, get) => ({
    entities: [],

    create: async (port) => {
        return repository.create(port).then((entity) => {
            set(prev => ({ ...prev, entities: [entity].concat(prev.entities) }))
        })
    },

    loadEntities: async (): Promise<void> => {
        repository.getAll().then((entities) => {
            set(prev => ({ ...prev, entities }))
        })
    },

    reset: () => {
        set((prev) => ({ ...prev, entities: [] }))
    },

}))

export const useOrderStore = <T, >(
    selector: (store: OrderStore) => T
): T => useStore(orderStore, selector)