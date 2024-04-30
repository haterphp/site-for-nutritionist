import { PropsWithChildren } from "react";

import dynamic from "next/dynamic";

import './index.css'

const AccountSidebar = dynamic(() => import('@/widgets/sidebars/account-sidebar'))

interface IAccountLayoutProps extends PropsWithChildren {}

export default function AccountLayout(props: IAccountLayoutProps): JSX.Element {
    const { children } = props

    return (
        <div className="account-layout">
            <AccountSidebar />
            
            <div className="account-content">{children}</div>
        </div>
    )
}