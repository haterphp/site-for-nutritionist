import { ButtonColors, ButtonSizes } from "../interfaces";

const BUTTON_COLORS: Record<ButtonColors, string> = {
    primary: 'btn--primary',
    secondary: 'btn--secondary'
}

const BUTTON_SIZES: Record<ButtonSizes, string | null> = {
    medium: null,
    large: 'btn--large'
}

export { BUTTON_COLORS, BUTTON_SIZES }