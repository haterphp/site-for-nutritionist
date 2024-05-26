import { makeClassname } from "../common/functions";
import { ICommonHTMLEventProps, ICommonHTMLProps } from "../common/interfaces";

import './index.css'

interface IAvatarProps extends Omit<ICommonHTMLProps, 'children'>, ICommonHTMLEventProps {
    value: string
}

export function Avatar(props: IAvatarProps) {
    const {className, value, ...rest} = props
    
    return (
        <div {...rest} className={makeClassname('avatar', className)}>
            {value}
        </div>
    )
}