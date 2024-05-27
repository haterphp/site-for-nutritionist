'use client';

import { createContext, createRef, FC, PropsWithChildren, RefObject, useContext, useEffect, useRef, useState } from "react";
import { StoreApi, useStore } from "zustand";
import { UserStore } from "../interfaces/store";
import { userStore } from "../store";
import { UserRepository } from "../repository";
import { TransformUserPipe } from "../pipes";
import { HttpAppService } from "@/shared/utils";
import { HttpHeaders, LocalStorageValues } from "@/shared/enums";
import { GlobalLoader } from "@/features/global-loader";
import { CSSTransition } from "react-transition-group";

const UserStoreContext = createContext<StoreApi<UserStore> | null>(null)
const repository = new UserRepository()

export const UserStoreProvider: FC<PropsWithChildren> = ({children}) => {
    const storeRef = useRef<StoreApi<UserStore>>()

    const [isLoading, setIsLoading] = useState(true)
    const loaderRef = createRef<CSSTransition<HTMLDivElement>>()

    if (!storeRef.current) {
        storeRef.current = userStore
    }

    useEffect(() => {
      const token = window.localStorage.getItem(LocalStorageValues.ACCESS_TOKEN)
      
      if (token !== null) {
        HttpAppService.setHeaders(HttpHeaders.AUTHORIZATION, `Bearer ${token}`)
  
        repository.getMe().then((user) => {
          userStore.getState().setUser(TransformUserPipe.tranform(user))
        }).finally(() => {
          if (typeof window !== undefined) window.document.body.style.overflow = ''
          setIsLoading(false)
        })
      }
    }, [])

    return (
      <>
        <CSSTransition classNames="loader" unmountOnExit ref={loaderRef} timeout={300} in={isLoading}>
          <GlobalLoader ref={loaderRef as unknown as RefObject<HTMLDivElement>} />
        </CSSTransition>

        <UserStoreContext.Provider value={storeRef.current}>
            {children}
        </UserStoreContext.Provider>
      </>
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