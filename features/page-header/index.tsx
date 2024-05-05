import { ReactNode } from 'react'
import { ArrowBack } from '@/shared/assets/icons/arrow-back'

import './index.css'

interface IPageHeaderProps {
    title: string

    isBackButtonVisible?: boolean
    Toolbar?: ReactNode
}

export function PageHeader(props: IPageHeaderProps): JSX.Element {
    const { title, Toolbar, isBackButtonVisible } = props

    return (
        <div className='page-header'>
            { isBackButtonVisible && <button className='page-header-button'>
                <ArrowBack />

                Назад
            </button> }

            <div className="page-header-content">
                <h2 className="page-header-title">{title}</h2>

                { Toolbar !== undefined && <div className="page-header-toolbar">{Toolbar}</div>}
            </div>
        </div>
    )
}