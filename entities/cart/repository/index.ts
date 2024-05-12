import { ExceptionService } from "@/shared/utils";
import { ICartItemEntity, ICartRepository } from "../interfaces";
import { InternalCode, LocalStorageValues } from "@/shared/enums";

export class CartRepository implements ICartRepository {
    
    private get storage(): Storage {
        if (typeof window === 'undefined') {
            throw ExceptionService.new({
                status: {
                    code: InternalCode.PROPERTY_IS_INVALID,
                    message: 'LocalStorage not defined'
                }
            })
        }

        return window.localStorage
    }

    public getAll(): ICartItemEntity[] {
        const entities = this.storage.getItem(LocalStorageValues.CART)

        if (entities !== null) return JSON.parse(entities) as ICartItemEntity[]
        return []
    }

    public emit(data: ICartItemEntity[]): void {
        const value = JSON.stringify(data)
        
        this.storage.setItem(LocalStorageValues.CART, value)
    }

    public reset(): void {
        this.storage.removeItem(LocalStorageValues.CART)
    }
}