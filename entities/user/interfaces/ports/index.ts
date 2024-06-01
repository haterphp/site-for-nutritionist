interface ILoginPort {
    email: string
    password: string
}

interface ISignUpPort extends ILoginPort {
    name: string
}

interface IUpdateUserPort {
    id: number
    name: string
}

export type { ILoginPort, ISignUpPort, IUpdateUserPort }