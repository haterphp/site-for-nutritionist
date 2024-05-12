'use client'

import { useState } from 'react'
import { Button } from '../../ui'
import './index.css'

interface ICountInputProps {
    defaultValue?: number
    onChange: (value: number) => void
}

export function CountInput (props: ICountInputProps): JSX.Element {
    const { onChange, defaultValue = 1 } = props

    const [value, setValue] = useState(defaultValue)

    const decrement = () => setValue((prev) => {
        const value = prev > 0 ? prev - 1 : prev
        onChange(value)
        return value
    })

    const increment = () => setValue((prev) => {
        const value = prev + 1
        onChange(value)
        return value
    })

    return (
        <div className='count-input'>
            <Button className='count-input-button' onClick={decrement} isDisabled={value <= 0}>-</Button>

            <div className="count-input-value">{value}</div>

            <Button className='count-input-button' onClick={increment}>+</Button>
        </div>
    )
}