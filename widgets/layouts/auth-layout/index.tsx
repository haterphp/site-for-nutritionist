import { FormEventHandler, PropsWithChildren, ReactNode } from "react";

import './index.css'

interface IAuthLayoutContentProps extends PropsWithChildren {
    title: ReactNode
    Footer?: ReactNode
    onSubmit?: FormEventHandler
}

export default function AuthLayoutContent(props: IAuthLayoutContentProps) {
    const { title, children, Footer, onSubmit: handleOnSubmit } = props

    return (
        <div className="auth-layout">
            <div className="auth-layout-content">
                <h2 className="auth-layout-title">{title}</h2>

                <form className="auth-layout-form" onSubmit={handleOnSubmit}>
                    {children}
                </form>
            </div>

            {Footer !== undefined && <div className="auth-layout-footer">{Footer}</div>}
        </div>
    )
}