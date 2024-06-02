import Link from 'next/link'
import Logo from '../app-logo'
import './index.css'

interface IFooterProps {
    links: Record<'to' | 'label', string>[]
}

export default function Footer(props: IFooterProps) {
    const { links } = props

    return (
        <footer className="app-footer">
            <div className="app-footer-content">
                <Logo />

                <div className="app-footer-links">
                    {links.map(({ label, to }) => <Link key={to} href={to} className='app-footer-link'>{label}</Link>)}
                </div>
            </div>

            <div className="app-footer-bottom">
                <p className='text-secondary-main/50'>© 2023 Коляда М.О.</p>
            </div>
        </footer>
    )
}