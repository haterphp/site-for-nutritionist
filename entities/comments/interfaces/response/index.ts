import { IUserResponse } from "@/entities/user/interfaces/responses";
import { IGetAllResponse, IGetOneResponse, IResponseItem, StrapiAttributes } from "@/shared/interfaces";

interface Attributes extends StrapiAttributes {
    comment: string
    author: IGetOneResponse<IUserResponse>
    createdAt: string
}

export type CommentResponseItem = IResponseItem<Attributes>
export type IGetOneComment = IGetOneResponse<CommentResponseItem> 
export type IGetAllComments = IGetAllResponse<CommentResponseItem> 