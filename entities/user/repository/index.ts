import { ExceptionService, HttpAppService } from "@/shared/utils";
import { ILoginPort, ISignUpPort, IUpdateUserPort, IUserRepository } from "../interfaces";
import { AuthUserResponse, IUserLoginResponse } from "../interfaces/responses";
import { HttpCode, HttpHeaders, InternalCode, LocalStorageValues } from "@/shared/enums";

export class UserRepository implements IUserRepository {
    public async getMe(): Promise<AuthUserResponse> {
        return HttpAppService.get('/api/users/me')
            .then((data) => new Promise((resolve) => setTimeout(resolve, 1000, data)))
    }

    public async login(data: ILoginPort): Promise<AuthUserResponse> {
        return HttpAppService.post<IUserLoginResponse>('api/auth/local', {
            body: {
                identifier: data.email,
                password: data.password,
            }
        }).then(({ jwt, user }) => {
            window?.localStorage.setItem(LocalStorageValues.ACCESS_TOKEN, jwt)
            HttpAppService.setHeaders(HttpHeaders.AUTHORIZATION, `Bearer ${jwt}`)

            return user
        }).catch((error) => {
            const status = error.data.error.status

            if (status === HttpCode.BAD_REQUEST) {
                throw ExceptionService.new({
                    status: {
                        code: InternalCode.USER_NOT_FOUND,
                        message: 'Неверный логин или пароль'
                    }
                })
            }

            throw ExceptionService.new({
                status: {
                    code: InternalCode.SERVER_ERROR,
                    message: 'Ошибка сервера'
                }
            })
        })
    }

    public async signUp(data: ISignUpPort): Promise<void> {
        await HttpAppService.post('api/auth/local/register', {
            body: {
                password: data.password,
                email: data.email,
                username: data.name
            }
        })
    }

    public async update({ id, ...payload }: IUpdateUserPort): Promise<void> {
        const data = {
            username: payload.name
        }

        await HttpAppService.put(`/api/user/me`, { body: { data }})
    }
}