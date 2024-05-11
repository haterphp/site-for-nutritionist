interface ICartProdcutEntity {
    id: string
    title: string
    image: string
}

interface ICartItemEntity {
    id: string
    product: ICartProdcutEntity
    count: number
}

export type { ICartItemEntity, ICartProdcutEntity }

