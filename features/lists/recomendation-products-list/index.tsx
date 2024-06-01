import { ProductCard } from "@/features/cards/product-card";
import { CardsGridTemplate } from "../../../widgets/layouts/cards-grid";
import { ICatalogEntity, useCatalogStore } from "@/entities/catalog";
import { useEffect, useMemo } from "react";

interface IRecomendationProductsListProps {
    id: ICatalogEntity['id']
}

export function RecomendationProductsList (props: IRecomendationProductsListProps) {
    const { id } = props

    const {cards, load} = useCatalogStore((state) => ({
        cards: state.cards,
        load: state.loadCardsByCategory
    }))

    const products = useMemo(() => cards.filter(item => item.id !== props.id).slice(0, 4), [cards, id])

    useEffect(() => {
        load()
    }, [load])

    if (products.length <= 0) return null

    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-serif">Рекомендованные продукты</h2>

            <CardsGridTemplate items={products} CardFactory={ProductCard} />
        </div>
    )
}