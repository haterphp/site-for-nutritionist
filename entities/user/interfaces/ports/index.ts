interface ILoginPort {
    email: string
    password: string
}

interface ISignUpPort extends ILoginPort {
    name: string
}

export type { ILoginPort, ISignUpPort }