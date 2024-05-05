import { makeClassname } from "@/shared/components";
import { ICommonHTMLProps } from "@/shared/components/ui/common/interfaces";
import { ReactNode } from "react";

import './index.css'

interface ILayoutWithSidebarProps extends ICommonHTMLProps {
    Sidebar: ReactNode
    isReverse?: boolean
}

export default function LayoutWithSidebar(props: ILayoutWithSidebarProps) {
    const { Sidebar, children, className, isReverse = false, ...rest } = props

    return (
        <div className={makeClassname('layout-with-sidebar', isReverse && 'layout-with-sidebar--reverse', className)} {...rest}>
            {Sidebar}
            
            <div className={makeClassname("layout-with-sidebar-content", isReverse && '-order-1')}>
                {children}
            </div>
        </div>
    )
}