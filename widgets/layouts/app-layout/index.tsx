'use client'

import { AppNavDrawer } from "@/features/app-nav-drawer";
import dynamic from "next/dynamic";

import { PropsWithChildren, useMemo, useState } from "react";

const Header = dynamic(() => import('@/features/app-header'))

const DRAWER_WIDTH = 350

interface ILayoutProps extends PropsWithChildren {}

export default function Layout(props: ILayoutProps) {
    
    const { children } = props

    const [isOpen, setIsOpen] = useState(false)

    const handleOnToggle = () => {
        setIsOpen(prev => !prev)
    }

    const handleOnClose = () => {
        setIsOpen(false)
    }

    const transform = useMemo(() => isOpen ? `translateX(${DRAWER_WIDTH}px)` : undefined, [isOpen])

    return (
        <div className="overflow-x-hidden">
            <AppNavDrawer width={DRAWER_WIDTH} isOpen={isOpen} onClose={handleOnClose} />

            <div className="relative transition-transform" style={{ transform }}>
                <div className="container mx-auto px-5 min-h-screen ">
                    <Header isDrawerOpen={isOpen} onDrawerButtonClick={handleOnToggle} />

                    <div className="py-10">
                        {children}
                    </div>
                </div>

                { isOpen && <div className="w-full h-screen absolute top-0 left-0 z-20" onClick={handleOnClose}/> }
            </div>
        </div>
    )
}