import { useMemo } from 'react'
import Link from 'next/link';
import './index.css'
import { makeClassname } from '@/shared/components';
import { useDetectPath } from '@/shared/helpers/paths';

interface IAppNavDrawer {
    width: number
    isOpen: boolean
    links: Record<'to' | 'label', string>[]

    onClose(): void
}

export function AppNavDrawer (props: IAppNavDrawer) {
    const { width, isOpen, links, onClose: handleOnClose } = props

    const detect = useDetectPath()

    const left = useMemo(() => isOpen ? 0 : -width, [isOpen, width])

    return (
        <div className="drawer" style={{ width, left }}>
            <h2>Меню</h2>

            <div className="drawer-links">
                { links.map((link) => <Link
                    onClick={handleOnClose}
                    href={link.to}
                    className={makeClassname("drawer-link", detect(link.to) && 'drawer-link--active')}
                    key={link.label}
                >
                    {link.label}
                </Link>
                )}
            </div>
        </div>
    )
}