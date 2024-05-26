'use client';

import { createContext, FC, PropsWithChildren, useContext, useEffect, useRef } from "react";
import { StoreApi, useStore } from "zustand";
import { UserStore } from "../interfaces/store";
import { userStore } from "../store";
import { UserRepository } from "../repository";
import { TransformUserPipe } from "../pipes";
import { HttpAppService } from "@/shared/utils";
import { HttpHeaders, LocalStorageValues } from "@/shared/enums";

const UserStoreContext = createContext<StoreApi<UserStore> | null>(null)
const repository = new UserRepository()

export const UserStoreProvider: FC<PropsWithChildren> = ({children}) => {
    const storeRef = useRef<StoreApi<UserStore>>()

    if (!storeRef.current) {
        storeRef.current = userStore
    }

    useEffect(() => {
      const token = window.localStorage.getItem(LocalStorageValues.ACCESS_TOKEN)

      if (token !== null) {
        HttpAppService.setHeaders(HttpHeaders.AUTHORIZATION, `Bearer ${token}`)
  
        repository.getMe().then((user) => {
          userStore.getState().setUser(TransformUserPipe.tranform(user))
        })
      }
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
      throw new Error(`useUserStore must be use within UserStoreProvider`)
    }
  
    return useStore(userStoreContext, selector)
  }