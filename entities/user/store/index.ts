import { createStore } from "zustand";

import { UserStore } from "../interfaces/store";
import { UserRepository } from "../repository";

const repository = new UserRepository()

export const userStore = createStore<UserStore>()((set) => ({
    user: null,
    setUser: (user) => set((state) => ({ ...state, user })),

    login: repository.login.bind(this),
    signUp: repository.signUp.bind(this)
}))