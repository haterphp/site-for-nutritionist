import { ForwardedRef, forwardRef, RefObject } from "react"
import { makeClassname } from "../../common/functions"

import './index.css'

type SnackbarMessageColor = 'primary' | 'error'

const COLORS = {
    primary: 'message--primary',
    error: 'message--error'
}

export interface ISnackbarMessageProps {
    id?: number
    message: string
    color: SnackbarMessageColor
}

function SnackbarMessageRenderFunction(props: ISnackbarMessageProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element {
    const { message, color } = props
    
    return (
        <div ref={ref} className={makeClassname('message', COLORS[color])}>
            {message}
        </div>
    )
}

export const SnackbarMessage = forwardRef(SnackbarMessageRenderFunction)