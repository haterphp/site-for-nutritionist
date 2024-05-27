import { ForwardedRef, forwardRef } from 'react'
import './index.css'

function GlobalLoaderRenderFuntion(_: unknown, ref: ForwardedRef<HTMLDivElement>) {
    return (
        <div className="loader" ref={ref}>
            <div className="loader-content"></div>
        </div>
    )
}

export const GlobalLoader = forwardRef(GlobalLoaderRenderFuntion)