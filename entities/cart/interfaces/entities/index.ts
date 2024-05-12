interface ICartProdcutEntity {
    id: string
    title: string
    image: string
    price: number
}

interface ICartItemEntity {
    id: string
    product: ICartProdcutEntity
    count: number
}

export type { ICartItemEntity, ICartProdcutEntity }

