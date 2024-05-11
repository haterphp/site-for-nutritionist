import { Dispatch, SetStateAction } from 'react'
import { Button } from '../../ui'
import './index.css'

interface ICountInputProps {
    value: number
    setValue: Dispatch<SetStateAction<number>>
}

export function CountInput (props: ICountInputProps): JSX.Element {
    const {value, setValue} = props

    const decrement= () => setValue((prev) => prev > 0 ? prev - 1 : prev)
    const increment = () => setValue((prev) => prev + 1)

    return (
        <div className='count-input'>
            <Button className='count-input-button' onClick={decrement} isDisabled={value <= 0}>-</Button>

            <div className="count-input-value">{value}</div>

            <Button className='count-input-button' onClick={increment}>+</Button>
        </div>
    )
}