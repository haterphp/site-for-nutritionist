import { IArticleEntity } from "../entity"

interface IArticleStoreState {
    cards: IArticleEntity[]
}

interface IArticleStoreActions {
    getCardById(id: IArticleEntity['id']): Promise<IArticleEntity>
    loadCards(): Promise<void>
}

type ArticleStore = IArticleStoreState & IArticleStoreActions

export type { ArticleStore }