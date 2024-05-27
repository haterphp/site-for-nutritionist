'use client'

import { createContext, useContext } from "react";
import { ISnackbarMessageProps } from "../message";

interface ISnackbarContext {
    make: (props: ISnackbarMessageProps) => void
}

export const SnackbarContext = createContext<ISnackbarContext>({ make: ()  => {} })
export const useSnackbar = (): ISnackbarContext => useContext(SnackbarContext)