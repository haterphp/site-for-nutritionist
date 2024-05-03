import { IArticleEntity } from "../entity"

interface IArticleStoreState {
    cards: IArticleEntity[]
}

interface IArticleStoreActions {
    loadCards(): Promise<void>
}

type ArticleStore = IArticleStoreState & IArticleStoreActions

export type { ArticleStore }