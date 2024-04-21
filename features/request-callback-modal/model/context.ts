import { IUseModalReturns } from "@/shared/components";
import { createContext } from "react";

const RequestCallbackModalContext = createContext<IUseModalReturns>({
    isOpen: false,
    open: () => {},
    close: () => {},
    toggle: () => {},
})

export { RequestCallbackModalContext }