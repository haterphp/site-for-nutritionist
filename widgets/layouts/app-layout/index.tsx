import dynamic from "next/dynamic";

import { PropsWithChildren } from "react";

const Header = dynamic(() => import('@/features/app-header'))

interface ILayoutProps extends PropsWithChildren {}

export default function Layout(props: ILayoutProps) {
    
    const { children } = props

    return (
        <div className="container mx-auto px-5 min-h-screen">
            <Header />

            <div className="py-10">
                {children}
            </div>
        </div>
    )
}