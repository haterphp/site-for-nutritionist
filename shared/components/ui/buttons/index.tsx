import { useMemo } from "react"

import { BUTTON_COLORS, BUTTON_SIZES } from "./contants"

import { IButtonProps } from "./interfaces"

import { makeClassname } from "../common/functions"

import './styles.css'

const Button = (props: IButtonProps): JSX.Element => {
    const {
        type = 'button',
        size = 'medium',
        color = 'primary',
        className: extenalClassname,
        isDisabled = false,
        ...rest
    } = props

    const className = useMemo(
        () => makeClassname('btn', BUTTON_COLORS[color], BUTTON_SIZES[size], extenalClassname),
        [size, color, extenalClassname]
    )

    return (
        <button type={type} className={className} disabled={isDisabled} {...rest}>
            {rest.children}
        </button>
    )
}

export { Button }