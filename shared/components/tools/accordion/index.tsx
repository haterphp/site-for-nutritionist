'use client'

import { ReactNode, useState } from "react"

import { makeClassname } from "../../ui"

import { ICommonHTMLProps } from "../../ui/common/interfaces"

import { ArrowDown } from "@/shared/assets/icons/arrow-down"

import './index.css'

interface IAccordionProps extends ICommonHTMLProps {
    label: ReactNode
    defaultState?: boolean
}

export function Accordion(props: IAccordionProps): JSX.Element  {
    const { label, defaultState = true, className, children, ...rest } = props

    const [isOpen, setIsOpen] = useState(defaultState)

    const handleOnToggle = (): void => {
        setIsOpen((prev) => !prev)
    }

    return (
        <div className={makeClassname('paper', 'accordion', isOpen && 'accordion--open', className)} {...rest}>
            <div className="accordion-header" onClick={handleOnToggle}>
                <p className="accordion-header-label">{label}</p>

                <div className="accordion-header-icon">
                    <ArrowDown />
                </div>
            </div>

            <div className={makeClassname("accordion-content")}>
                <div className="accordion-inner-content">
                    {children}
                </div>
            </div>
        </div>
    )
}