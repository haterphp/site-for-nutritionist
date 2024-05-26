import { ExceptionService, HttpAppService } from "@/shared/utils";
import { ILoginPort, ISignUpPort, IUserRepository } from "../interfaces";
import { AuthUserResponse, IUserLoginResponse } from "../interfaces/responses";
import { HttpCode, HttpHeaders, InternalCode, LocalStorageValues } from "@/shared/enums";

export class UserRepository implements IUserRepository {
    public async getMe(): Promise<AuthUserResponse> {
        return HttpAppService.get('/api/users/me')
    }

    public async login(data: ILoginPort): Promise<AuthUserResponse> {
        return HttpAppService.post<IUserLoginResponse>('api/auth/local', {
            body: {
                identifier: data.email,
                password: data.password,
            }
        }).then(({ jwt, user }) => {
            window?.localStorage.setItem(LocalStorageValues.ACCESS_TOKEN, jwt)
            HttpAppService.setHeaders(HttpHeaders.AUTHORIZATION, jwt)

            return user
        }).catch((error) => {
            if (error.error.status === HttpCode.BAD_REQUEST) {
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
                name: data.name,
                password: data.password,
                email: data.email,
                username: data.name
            }
        })
    }
}