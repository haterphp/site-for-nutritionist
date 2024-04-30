import { PropsWithChildren } from "react";

import dynamic from "next/dynamic";

const LayoutWithSidebar = dynamic(() => import('@/widgets/layouts/sidebar-layout'))
const AccountSidebar = dynamic(() => import('@/widgets/sidebars/account-sidebar'))

interface IAccountLayoutProps extends PropsWithChildren {}

export default function AccountLayout(props: IAccountLayoutProps): JSX.Element {
    return (
        <LayoutWithSidebar Sidebar={<AccountSidebar/>} {...props} />            
    )
}