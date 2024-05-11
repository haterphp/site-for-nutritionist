import { IBadgeProps } from "./interfaces";

import { makeClassname } from "../common/functions";

import './index.css'
import { ReactNode } from "react";

export function Badge(props: IBadgeProps): ReactNode {
    const { id, className, label, children, isVisible = true } = props

    if (!isVisible) return children

    return (
        <div className="badge-container">
            <div className={makeClassname("badge", className)} id={id}>{label}</div>
            {children}
        </div>
    )
}