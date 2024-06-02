'use client'

import Footer from "@/features/app-footer";
import Header from "@/features/app-header";
import { AppNavDrawer } from "@/features/app-nav-drawer";

import { PropsWithChildren, useMemo, useState } from "react";


const DRAWER_WIDTH = 350

const LINKS = [
    { label: "Главная", to: "/" },
    // { label: "Обо мне", to: "/about-me" },
    { label: "Каталог", to: "/catalog" },
    { label: "Статьи", to: "/articles" },
];
  

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
            <AppNavDrawer links={LINKS} width={DRAWER_WIDTH} isOpen={isOpen} onClose={handleOnClose} />

            <div className="relative transition-transform" style={{ transform }}>
                <div className="container mx-auto px-5 min-h-screen ">
                    <Header isDrawerOpen={isOpen} onDrawerButtonClick={handleOnToggle} />

                    <main className="py-10">
                        {children}
                    </main>

                    <Footer links={LINKS} />
                </div>

                { isOpen && <div className="w-full h-screen absolute top-0 left-0 z-20" onClick={handleOnClose}/> }
            </div>
        </div>
    )
}