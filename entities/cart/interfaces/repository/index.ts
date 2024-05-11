import { ICartItemEntity } from "../entities";

export interface ICartRepository {
    getAll(): ICartItemEntity[]
    emit(data: ICartItemEntity[]): void
    reset(): void
}