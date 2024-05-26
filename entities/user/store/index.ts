import { createStore } from "zustand";

import { UserStore } from "../interfaces/store";
import { UserRepository } from "../repository";
import { TransformUserPipe } from "../pipes";

const repository = new UserRepository()

export const userStore = createStore<UserStore>()((set) => ({
    user: null,
    setUser: (user) => set((state) => ({ ...state, user })),

    login: async (port) => {
        const user = await repository.login(port)
        console.log(TransformUserPipe.tranform(user))
        set((prev) => ({ ...prev, user: TransformUserPipe.tranform(user) }))
    },

    signUp: repository.signUp.bind(this)
}))