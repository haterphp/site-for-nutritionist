'use client'

import { ReactNode, useEffect, useMemo, useRef } from "react"
import { createPortal } from "react-dom"
import { useMounted } from "./use-mounted"

const usePortal = (content: ReactNode): ReactNode => {
    const ref = useRef<HTMLElement | null>(null)
    const mounted = useMounted()

    const isReadyToRender = useMemo(() => mounted && ref.current !== null, [ref, mounted])

    useEffect(() => {
        if (window !== undefined) ref.current = document.getElementById('portal')
    }, [])
        
    return isReadyToRender
        ? createPortal(content, ref.current as HTMLElement)
        : null
}

export { usePortal }