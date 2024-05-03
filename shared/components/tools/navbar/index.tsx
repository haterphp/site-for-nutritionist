import { ICommonHTMLProps } from '@/shared/components/ui/common/interfaces'

import { makeClassname } from '@/shared/components'

import { MouseEvent, ReactNode } from 'react'

import './index.css'

export interface INavbarItem {
    id: string
    label: string
    Icon?: ReactNode    
    isActive?: (id: INavbarItem['id']) => boolean
    onClick?: (e: MouseEvent, id: INavbarItem['id']) => void
}

interface INavbarProps extends Omit<ICommonHTMLProps, 'children'> {
    items: INavbarItem[]
}

const NavbarItem = (props: INavbarItem): JSX.Element => {
    const { id, label, Icon, onClick: handleOnClick, isActive } = props

    return (
        <div
            className={makeClassname('navbar-item', isActive?.(id) && 'navbar-item--active')}
            onClick={(e) => handleOnClick?.(e, id)}
            data-id={id}
        >
            { Icon !== undefined && <div className="navbar-item-icon">{Icon}</div>}
            <p className="navbar-item-label">{label}</p>
        </div>
    )
}

export function Navbar(props: INavbarProps): JSX.Element {
    const { className, items, id } = props

    return (
        <div id={id} className={makeClassname('paper', 'navbar', className)}>
            {items.map((item) => <NavbarItem key={item.id} {...item}/>)}
        </div>
    )
}