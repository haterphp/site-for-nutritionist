'use client'

import Link from 'next/link'

import { useDetectPath } from '@/shared/helpers/paths'

import { makeClassname } from '@/shared/components/ui/common/functions'

import './index.css'

const LINKS = [
    { label: 'Главная', to: '/' },
    { label: 'О нас', to: '/about-us' },
    { label: 'Контакты', to: '/#contacts' }
]

export default function Header(): JSX.Element {
    const detect = useDetectPath()

    return (
        <header className='header'>
            <h2 className="header-title">Lorem, ipsum</h2>

            <div className='header-links'>
                { LINKS.map(({label, to}) => <Link key={label} href={to} className={makeClassname('header-link', detect(to) && 'header-link--active')}>{label}</Link>) }
            </div>

            <div className="header-callback-container">
                <a className='header-callback-link' href='tel:+79999999999'>+7 (999) 999 99-99</a>
                <span className='header-callback-link underline'>Запрос на обратный звонок</span>
            </div>
        </header>
    )
}