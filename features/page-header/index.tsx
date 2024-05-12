'use client'

import { ReactNode, useMemo } from 'react'
import { ArrowBack } from '@/shared/assets/icons/arrow-back'

import './index.css'
import { useRouter } from 'next/navigation'

interface IPageHeaderProps {
    title: string

    BackButton?: { visible?: boolean, url?: string, text?: string }
    Toolbar?: ReactNode
}

export function PageHeader(props: IPageHeaderProps): JSX.Element {
    const { title, Toolbar, BackButton} = props

    const router = useRouter()

    const BackButtonProps = useMemo(() => {
        return {
            visible: BackButton?.visible ?? false,
            url: BackButton?.url,
            text: BackButton?.text ?? 'Назад',
        }
    }, [BackButton])

    const handleOnClick = (): void => {
        if (BackButtonProps.url !== undefined) router.replace(BackButtonProps.url)
        else router.back()
    }

    return (
        <div className='page-header'>
            { BackButtonProps.visible && <button className='page-header-button' onClick={handleOnClick}>
                <ArrowBack />

                {BackButtonProps.text}
            </button> }

            <div className="page-header-content">
                <h2 className="page-header-title">{title}</h2>

                { Toolbar !== undefined && <div className="page-header-toolbar">{Toolbar}</div>}
            </div>
        </div>
    )
}