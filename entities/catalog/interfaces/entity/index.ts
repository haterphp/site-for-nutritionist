import { RichText } from "@/shared/interfaces"

interface ICatalogEntity {
    id: string
    images: string[]
    title: string
    description: string
    content: RichText
    price: number
}

interface ICategoryEntity {
    id: string
    title: string
}

export type { ICatalogEntity, ICategoryEntity }