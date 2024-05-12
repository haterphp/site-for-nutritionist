'use client'

import { ICatalogEntity, useCatalogStore } from "@/entities/catalog";
import { PageHeader } from "@/features/page-header";
import { ProductImages } from "@/features/product-images";
import LayoutWithSidebar from "@/widgets/layouts/sidebar-layout";
import { ProductPriceSidebar } from "@/widgets/sidebars/product-price-sidebar";
import { useParams } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { RichText } from "@/shared/components";

import './index.css'
import { CardsGridTemplate } from "@/widgets/layouts/cards-grid";
import { RecomendationProductsList } from "@/widgets/recomendation-products-list";

export default function ProductPage(): ReactNode {
    const params = useParams()

    const [product, setProduct] = useState<ICatalogEntity | null>(null)
    const getProductById = useCatalogStore(state => state.getOneById)

    useEffect(() => {
        getProductById(params.id as string).then(setProduct)
    }, [params, getProductById])

    if (product === null) return null

    return (
        <LayoutWithSidebar Sidebar={<ProductPriceSidebar {...product} />} isReverse>
            <PageHeader
                title={product.title}
                BackButton={{ visible: true, url: '/catalog' }}
            />

            <div className="product-page-content">
                <ProductImages images={product.images} />

                <RichText content={product.content} />
            </div>

            <RecomendationProductsList id={product.id}/>
        </LayoutWithSidebar>
    )
}