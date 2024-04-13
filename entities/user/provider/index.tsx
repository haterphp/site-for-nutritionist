'use client';

import { createContext, FC, PropsWithChildren, useContext, useEffect, useRef } from "react";
import { StoreApi, useStore } from "zustand";
import { UserStore } from "../interfaces";
import { userStore } from "../store";

const UserStoreContext = createContext<StoreApi<UserStore> | null>(null)

export const UserStoreProvider: FC<PropsWithChildren> = ({children}) => {
    const storeRef = useRef<StoreApi<UserStore>>()

    if (!storeRef.current) {
        storeRef.current = userStore
    }

    useEffect(() => {
        setTimeout(userStore.getState().setUser, 1000, { login: '123', name: '123' })
    }, [])

    return (
        <UserStoreContext.Provider value={storeRef.current}>
            {children}
        </UserStoreContext.Provider>
    )
}

export const useUserStore = <T,>(
    selector: (store: UserStore) => T,
  ): T => {
    const userStoreContext = useContext(UserStoreContext)
  
    if (!userStoreContext) {
      throw new Error(`useCounterStore must be use within CounterStoreProvider`)
    }
  
    return useStore(userStoreContext, selector)
  }