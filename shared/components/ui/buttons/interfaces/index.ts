import { ICommonHTMLEventProps, ICommonHTMLProps } from "../../common/interfaces";

type ButtonColors = 'primary' | 'secondary'
type ButtonSizes = 'medium' | 'large'

interface IButtonProps extends ICommonHTMLProps, ICommonHTMLEventProps {
    type?: HTMLButtonElement['type']
    color?: ButtonColors
    size?: ButtonSizes
}

export type { IButtonProps, ButtonColors, ButtonSizes }