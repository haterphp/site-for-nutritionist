import { makeClassname } from "@/shared/components";
import { ICommonHTMLProps } from "@/shared/components/ui/common/interfaces";
import { ReactNode } from "react";

import './index.css'

interface ILayoutWithSidebarProps extends ICommonHTMLProps {
    Sidebar: ReactNode
}

export default function LayoutWithSidebar(props: ILayoutWithSidebarProps) {
    const { Sidebar, children, className, ...rest } = props

    return (
        <div className={makeClassname('layout-with-sidebar', className)} {...rest}>
            {Sidebar}
            
            <div className="layout-with-sidebar-content">
                {children}
            </div>
        </div>
    )
}