import { IBadgeProps } from "./interfaces";

import './index.css'
import { makeClassname } from "../common/functions";

export function Badge(props: IBadgeProps): JSX.Element {
    const { id, className, label, children } = props

    return (
        <div className="badge-container">
            <div className={makeClassname("badge", className)} id={id}>{label}</div>
            {children}
        </div>
    )
}