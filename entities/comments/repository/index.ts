import { HttpAppService } from "@/shared/utils";
import { CommentResponseItem, ICommentEntity, ICommentsRepository, IGetAllComments } from "../interfaces";

export class CommentsRepository implements ICommentsRepository {
    public async getAll(id: string): Promise<ICommentEntity[]> {
        const params = {
            filters: { article: { '$eq': id } },
            populate: { 0: 'author' }
        }

        return HttpAppService.get<IGetAllComments>(`/api/comments`, { params }).then((payload) => {
            return payload.data.map(this._transformToEntity.bind(this))
        })    
    }

    private _transformToEntity(data: CommentResponseItem): ICommentEntity {
        return {
            id: String(data.id),
            user: data.attributes.author.data.attributes.username,
            comment: data.attributes.comment,
        }
    }
}