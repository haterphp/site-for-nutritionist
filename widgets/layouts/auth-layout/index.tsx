import { PropsWithChildren, ReactNode } from "react";

import './index.css'

interface IAuthLayoutContentProps extends PropsWithChildren {
    title: ReactNode
    Footer?: ReactNode
}

export default function AuthLayoutContent(props: IAuthLayoutContentProps) {
    const { title, children, Footer } = props

    return (
        <div className="auth-layout">
            <h2 className="auth-layout-title">{title}</h2>

            <form className="auth-layout-form">
                {children}
            </form>

            {Footer !== undefined && <div className="auth-layout-footer">{Footer}</div>}
        </div>
    )
}