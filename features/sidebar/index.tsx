import { ICommonHTMLProps } from '@/shared/components/ui/common/interfaces'
import './index.css'
import { makeClassname } from '@/shared/components'
import { MouseEvent, ReactNode } from 'react'

export interface ISidebarItem {
    id: string
    label: string
    Icon?: ReactNode    
    isActive?: (id: ISidebarItem['id']) => boolean
    onClick?: (e: MouseEvent, id: ISidebarItem['id']) => void
}

interface ISidebarProps extends Omit<ICommonHTMLProps, 'children'> {
    items: ISidebarItem[]
}

const SidebarItem = (props: ISidebarItem): JSX.Element => {
    const { id, label, Icon, onClick: handleOnClick, isActive } = props

    return (
        <div
            className={makeClassname('sidebar-item', isActive?.(id) && 'sidebar-item--active')}
            onClick={(e) => handleOnClick?.(e, id)}
            data-id={id}
        >
            { Icon !== undefined && <div className="sidebar-item-icon">{Icon}</div>}
            <p className="sidebar-item-label">{label}</p>
        </div>
    )
}

export default function Sidebar(props: ISidebarProps): JSX.Element {
    const { className, items, id } = props

    return (
        <div id={id} className={makeClassname('sidebar', className)}>
            {items.map((item) => <SidebarItem key={item.id} {...item}/>)}
        </div>
    )
}