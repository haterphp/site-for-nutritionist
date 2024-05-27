import { HttpAppService } from "@/shared/utils";
import { CommentResponseItem, ICommentEntity, ICommentsRepository, IGetAllComments, IGetOneComment } from "../interfaces";
import { ICreateCommentPort } from "../interfaces/port";

export class CommentsRepository implements ICommentsRepository {
    public async getAll(id: string): Promise<ICommentEntity[]> {
        const params = {
            filters: { article: { '$eq': id } },
            populate: { 0: 'author' },
            sort: 'createdAt:desc'
        }

        return HttpAppService.get<IGetAllComments>(`/api/comments`, { params }).then((payload) => {
            return payload.data.map(this._transformToEntity.bind(this))
        })    
    }

    public async create(port: ICreateCommentPort): Promise<ICommentEntity> {
        const data = { comment: port.comment, author: port.userId, article: +port.articleId }

        const params = {
            populate: { 0: 'author' }
        }

        return HttpAppService.post<IGetOneComment>(
            '/api/comments',
            { body: { data }, params }
        ).then((response) => this._transformToEntity(response.data))
    }

    private _transformToEntity(data: CommentResponseItem): ICommentEntity {
        return {
            id: String(data.id),
            user: data.attributes.author.data.attributes.username,
            comment: data.attributes.comment,
        }
    }
}