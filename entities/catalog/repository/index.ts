import { HttpAppService } from "@/shared/utils";
import { CatalogResponseItem, CategoryResponseItem, ICatalogEntity, ICatalogRepository, ICategoryEntity, IGetAllCatalogItemsResponse, IGetAllCategoriesResponse } from "../interfaces";

export class CatalogRepository implements ICatalogRepository {
    public async getAll(id?: string): Promise<ICatalogEntity[]> {
        const params: Record<string, any> = {
            populate: { 0: 'images' }
        }

        if (id !== undefined) {
            params.filters = { category: { '$eq': id } }
        }

        return HttpAppService.get<IGetAllCatalogItemsResponse>('/api/products', { params }).then(payload => {
            return payload.data.map(this._transformToProductEntity.bind(this))   
        })
    }

    public async getCategories(): Promise<ICategoryEntity[]> {
        return HttpAppService.get<IGetAllCategoriesResponse>('/api/catalog-categories').then(payload => {
            return payload.data.map(this._transformToCategoryEntity.bind(this))
        })
    }

    private _transformToCategoryEntity(data: CategoryResponseItem): ICategoryEntity {
        return {
            id: String(data.id),
            title: data.attributes.title
        }
    }

    private _transformToProductEntity(item: CatalogResponseItem): ICatalogEntity {
        return {
            id: String(item.id),
            price: item.attributes.price,
            title: item.attributes.title,
            description: item.attributes.description,
            images: item.attributes.images.data.map(image => process.env.NEXT_PUBLIC_ADMIN_URL + image.attributes.url)
        }
    }
}