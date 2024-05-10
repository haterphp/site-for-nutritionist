interface ICatalogEntity {
    id: string
    images: string[]
    title: string
    description: string
    price: number
}

interface ICategoryEntity {
    id: string
    title: string
}

export type { ICatalogEntity, ICategoryEntity }