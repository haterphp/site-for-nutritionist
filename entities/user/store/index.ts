import { createStore } from "zustand";

import { UserStore } from "../interfaces";

export const userStore = createStore<UserStore>()((set) => ({
    user: null,
    setUser: (user) => set((state) => ({ ...state, user }))
}))