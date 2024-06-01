import { ChangeEventHandler, FocusEventHandler, ReactNode } from "react";
import { ICommonHTMLEventProps, ICommonHTMLProps } from "../../common/interfaces";

interface IInputEventProps {
    onBlur?: FocusEventHandler
    onFocus?: FocusEventHandler
    onChange?: ChangeEventHandler
}

interface IInputProps extends Omit<ICommonHTMLProps, 'children'>, ICommonHTMLEventProps, IInputEventProps {
    label: ReactNode
    feedback?: ReactNode
    
    type?: HTMLInputElement['type']
    name?: string
    placeholder?: string
    value?: string

    isDisabled?: boolean
    isError?: boolean
    isHideFeeback?: boolean
    isLabelFloated?: boolean

    rows?: number
}

export type { IInputProps }