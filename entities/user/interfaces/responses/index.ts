import { IResponseItem, StrapiAttributes } from "@/shared/interfaces"

interface Attributes extends StrapiAttributes {
    username: string
    email: string
    confirmed: boolean
    blocked: boolean
    createdAt: string
}

export type IUserResponse = IResponseItem<Attributes>