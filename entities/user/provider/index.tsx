'use client';

import { createContext, FC, PropsWithChildren, useContext, useEffect, useRef } from "react";
import { StoreApi, useStore } from "zustand";
import { UserStore } from "../interfaces/store";
import { userStore } from "../store";

const UserStoreContext = createContext<StoreApi<UserStore> | null>(null)

export const UserStoreProvider: FC<PropsWithChildren> = ({children}) => {
    const storeRef = useRef<StoreApi<UserStore>>()

    if (!storeRef.current) {
        storeRef.current = userStore
    }

    // TODO: Add setting user from server
    // useEffect(() => {
    //     setTimeout(userStore.getState().setUser, 1000, { login: '123', name: '123' })
    // }, [])

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
      throw new Error(`useUserStore must be use within UserStoreProvider`)
    }
  
    return useStore(userStoreContext, selector)
  }