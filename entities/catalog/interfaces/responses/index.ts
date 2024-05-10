import { IGetAllResponse, Image, IResponseItem, StrapiAttributes } from "@/shared/interfaces";

interface CategoryAttributes extends StrapiAttributes {
    title: string
}

interface CatalogItemAttributes extends StrapiAttributes {
    title: string
    description: string
    price: number
    images: { data: Image[] }
    createdAt: string
}

type CategoryResponseItem = IResponseItem<CategoryAttributes>
type CatalogResponseItem = IResponseItem<CatalogItemAttributes>


type IGetAllCategoriesResponse = IGetAllResponse<CategoryResponseItem>
type IGetAllCatalogItemsResponse = IGetAllResponse<CatalogResponseItem>

export type {
    CategoryResponseItem,
    CatalogResponseItem,
    IGetAllCategoriesResponse,
    IGetAllCatalogItemsResponse
}