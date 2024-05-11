import { IGetAllResponse, IGetOneResponse, Image, IResponseItem, RichText, StrapiAttributes } from "@/shared/interfaces";

interface CategoryAttributes extends StrapiAttributes {
    title: string
}

interface CatalogItemAttributes extends StrapiAttributes {
    title: string
    description: string
    price: number
    content: RichText
    images: { data: Image[] }
    createdAt: string
}

type CategoryResponseItem = IResponseItem<CategoryAttributes>
type CatalogResponseItem = IResponseItem<CatalogItemAttributes>


type IGetAllCategoriesResponse = IGetAllResponse<CategoryResponseItem>
type IGetAllCatalogItemsResponse = IGetAllResponse<CatalogResponseItem>

type IGetOneCatalogItemsResponse = IGetOneResponse<CatalogResponseItem>

export type {
    CategoryResponseItem,
    CatalogResponseItem,
    IGetAllCategoriesResponse,
    IGetAllCatalogItemsResponse,
    IGetOneCatalogItemsResponse
}