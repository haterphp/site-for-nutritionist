import { RichText } from "@/shared/interfaces"

export interface IArticleEntity {
    id: string
    title: string
    content: RichText
    description: string
    url: string
}