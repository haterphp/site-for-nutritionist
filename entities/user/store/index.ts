import { createStore } from "zustand";

import { UserStore } from "../interfaces/store";
import { UserRepository } from "../repository";
import { TransformUserPipe } from "../pipes";
import { IUpdateUserPort } from "../interfaces";

const repository = new UserRepository()

export const userStore = createStore<UserStore>()((set, get) => ({
    user: null,
    setUser: (user) => set((state) => ({ ...state, user })),

    login: async (port) => {
        const user = await repository.login(port)
        set((prev) => ({ ...prev, user: TransformUserPipe.tranform(user) }))
    },

    signUp: repository.signUp.bind(this),

    updateUser: async (port) => {
        const user = get().user

        if (user !== null) {
            await repository.update({ id: user.id, ...port })
            set((prev) => ({ ...prev, user: { ...user, ...port } }))
        }
    }
}))