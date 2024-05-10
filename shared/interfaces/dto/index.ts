import { RichText } from "../rich-text"

type Image = {
    data: {
        id: number
        attributes: { name: string, url: string }
    }
}

type StrapiAttributes = Record<string, any>

interface IResponseItem<TAttributes extends StrapiAttributes = StrapiAttributes>{
    id: number
    attributes: TAttributes
}

interface IMetaPayload {
    page: number
    pageSize: number
    pageCount: number
    total: number
}

interface IGetAllResponse<TResponseItem extends IResponseItem> {
    data: TResponseItem[]
    meta: IMetaPayload
}

interface IGetOneResponse<TResponseItem extends IResponseItem> {
    data: TResponseItem
    meta: IMetaPayload
}

export type {
    IGetAllResponse,
    IGetOneResponse,
    IResponseItem,
    StrapiAttributes,
    Image
}