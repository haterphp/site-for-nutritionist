'use client'

import { useState } from "react"

interface IUseModalReturns {
    isOpen: boolean
    
    open: () => void
    close: () => void
    toggle: () => void
}

const useModal = (): IUseModalReturns => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const open = (): void => {
        setIsOpen(true)
    }

    const close = (): void => {
        setIsOpen(false)
    }

    const toggle = (): void => {
        setIsOpen((prev) => !prev)
    }

    return {
        isOpen,
        open,
        close,
        toggle
    }
}

export {useModal, type IUseModalReturns}