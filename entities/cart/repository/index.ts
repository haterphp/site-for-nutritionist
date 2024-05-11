import { ExceptionService } from "@/shared/utils";
import { ICartItemEntity, ICartRepository } from "../interfaces";
import { InternalCode, LocalStorageValues } from "@/shared/enums";

export class CartRepository implements ICartRepository {
    private _storage: Storage | null
    
    constructor() {
        this._storage = typeof window !== 'undefined' ? window.localStorage : null
    }
    
    public getAll(): ICartItemEntity[] {
        const storage = this._getStorageInstance();
        const entities = storage.getItem(LocalStorageValues.CART)

        if (entities !== null) return JSON.parse(entities) as ICartItemEntity[]
        return []
    }

    public emit(data: ICartItemEntity[]): void {
        const storage = this._getStorageInstance();
        const value = JSON.stringify(data)
        
        storage.setItem(LocalStorageValues.CART, value)
    }

    public reset(): void {
        const storage = this._getStorageInstance();
        
        storage.removeItem(LocalStorageValues.CART)
    }

    private _getStorageInstance(): Storage {
        if (this._storage === null) {
            throw ExceptionService.new({
                status: {
                    code: InternalCode.PROPERTY_IS_INVALID,
                    message: 'LocalStorage not defined'
                }
            })
        }

        return this._storage
    }
}