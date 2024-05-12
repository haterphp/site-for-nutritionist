'use client'

import { useEffect } from "react";
import { useCartStore } from "../store";

export function CartProvider (): null {
    const load = useCartStore(state => state.loadEntities)

    useEffect(() => {
        load()
    }, [load])

    return null
}