import { IResponseItem, StrapiAttributes } from "@/shared/interfaces"

interface Attributes extends StrapiAttributes {
    username: string
    email: string
    confirmed: boolean
    blocked: boolean
    createdAt: string
}

export type AuthUserResponse = {id: number} & Attributes

export interface IUserLoginResponse {
    jwt: string
    user: AuthUserResponse
}

export type IUserResponse = IResponseItem<Attributes>