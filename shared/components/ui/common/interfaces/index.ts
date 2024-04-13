import { MouseEventHandler, ReactNode } from "react"

interface ICommonHTMLProps  {
    id?: string
    className?: string
    children?: ReactNode
}

interface ICommonHTMLEventProps {
    onClick?: MouseEventHandler
}

export type { ICommonHTMLProps, ICommonHTMLEventProps }