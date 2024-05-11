import { Image, IResponseItem, RichText, StrapiAttributes } from "@/shared/interfaces";

interface Attributes extends StrapiAttributes {
    title: string
    content: RichText
    description: string
    image: { data: Image }
    createdAt: string
}

export type IArticleResponseItem = IResponseItem<Attributes>