import { HttpAppService } from "@/shared/utils";
import { CommentResponseItem, ICommentEntity, ICommentsRepository, IGetAllComments } from "../interfaces";

export class CommentsRepository implements ICommentsRepository {
    public async getAll(id: string): Promise<ICommentEntity[]> {
        return HttpAppService.get<IGetAllComments>(`/api/comments?filters[article][$eq]=${id}&populate[0]=user`).then((payload) => {
            return payload.data.map(this._transformToEntity.bind(this))
        })    
    }

    private _transformToEntity(data: CommentResponseItem): ICommentEntity {
        return {
            id: String(data.id),
            user: data.attributes.user.data.attributes.username,
            comment: data.attributes.comment,
        }
    }
}