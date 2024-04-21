'use client'

import { usePathname } from "next/navigation"

type IUseDetectPath = (path: string) => boolean

export const useDetectPath = (): IUseDetectPath => {
    const pathname = usePathname()

    return (path: string) => pathname === path 
}