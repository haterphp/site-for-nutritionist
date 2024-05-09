import { FC, MouseEvent, ReactNode, useMemo } from 'react'

import { ICommonHTMLProps } from '@/shared/components/ui/common/interfaces'

import { makeClassname } from '@/shared/components'

import { CardsGridContext, ICardsGridContenxt } from './context'

import './index.css'

export interface ICardCommonItem {
    id: string
}
interface ICardsGridProps<TCardItem extends ICardCommonItem> extends Omit<ICommonHTMLProps, 'children'> {
    items: TCardItem[]
    CardFactory: FC<TCardItem>
    context?: Record<string, number | string | ReactNode | boolean | Function>
    onClick?: (e: MouseEvent, item: TCardItem) => void
}

export function CardsGridTemplate<TCardItem extends ICardCommonItem>(props: ICardsGridProps<TCardItem>) {
    const { items, className, CardFactory, onClick, context: externalContext, ...rest } = props

    const context = useMemo(() => ({ onClick, ...externalContext }), [onClick, externalContext])

    return (
        <div className={makeClassname("cards-grid", className)} {...rest}>
            <CardsGridContext.Provider value={context as ICardsGridContenxt}>
                { items.map((item) => <CardFactory key={item.id} {...item} />) }
            </CardsGridContext.Provider>
        </div>
    )
}