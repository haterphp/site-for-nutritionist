import dynamic from "next/dynamic";

import { PropsWithChildren } from "react";

const Header = dynamic(() => import('../app-header'))

interface ILayoutProps extends PropsWithChildren {}

export default function Layout(props: ILayoutProps) {
    
    const { children } = props

    return (
        <div className="container mx-auto px-2">
            <Header />

            <div className="pt-5">
                {children}
            </div>
        </div>
    )
}