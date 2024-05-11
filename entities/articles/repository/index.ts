import { HttpAppService } from "@/shared/utils";

import { IGetAllResponse, IGetOneResponse } from "@/shared/interfaces";

import { IArticleEntity, IArticleRepository, IArticleResponseItem } from "../interfaces";

export class AritcleRepository implements IArticleRepository {
    public async getAll(): Promise<IArticleEntity[]> {
        return HttpAppService.get<IGetAllResponse<IArticleResponseItem>>('/api/articles?populate=*').then(payload => {
            return payload.data.map(this._transformToEntity.bind(this))
        })
    }

    public async getOne(id: IArticleEntity['id']): Promise<IArticleEntity> {
        return HttpAppService.get<IGetOneResponse<IArticleResponseItem>>(`/api/articles/${id}?populate=*`).then(payload => {
            return this._transformToEntity(payload.data)
        })
    }

    private _transformToEntity (data: IArticleResponseItem): IArticleEntity {
        return {
            id: String(data.id),
            title: data.attributes.title,
            url: process.env.NEXT_PUBLIC_ADMIN_URL + data.attributes.image.data.attributes.url,
            description: data.attributes.description,
            content: data.attributes.content
        }
    }
}