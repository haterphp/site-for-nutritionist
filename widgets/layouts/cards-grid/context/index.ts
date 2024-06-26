import { createContext, MouseEvent, useContext } from "react";

export interface ICardsGridContenxt {
    onClick?: (e: MouseEvent, item: unknown) => void,
}

export const CardsGridContext = createContext<ICardsGridContenxt>({})
export const useCardsContext = <T extends ICardsGridContenxt = ICardsGridContenxt,>(): T => useContext(CardsGridContext) as T