import { FC } from 'react'

import { ICommonHTMLProps } from '@/shared/components/ui/common/interfaces'

import { makeClassname } from '@/shared/components'

import './index.css'

export interface ICardCommonItem {
    id: string
}
interface ICardsGridProps<TCardItem extends ICardCommonItem> extends Omit<ICommonHTMLProps, 'children'> {
    items: TCardItem[]
    CardFactory: FC<TCardItem>
}

export function CardsGridTemplate<TCardItem extends ICardCommonItem>(props: ICardsGridProps<TCardItem>) {
    const { items, className, CardFactory, ...rest } = props

    return (
        <div className={makeClassname("cards-grid", className)} {...rest}>
            { items.map((item) => <CardFactory key={item.id} {...item} />) }
        </div>
    )
}