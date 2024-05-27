import { useMemo } from "react"
import { OrderRepository } from "../../repository"
import { ICreateOrderPort } from "../../interfaces"
import { useSnackbar } from "@/shared/components"
import { useUserStore } from "@/entities/user"
import { useCartStore } from "@/entities/cart"
import { OrderStatus } from "../../enum"
import { useRouter } from "next/navigation"

interface ICreateOrderRequest {
    onSubmit: () => Promise<void>
}

export const useCreateOrderRequest = (): ICreateOrderRequest => {
    const snackbar = useSnackbar()
    const router = useRouter()

    const user = useUserStore(state => state.user)
    const [cartProducts, resetCart] = useCartStore(state => [state.entities, state.reset])

    const _request = useMemo(() => new OrderRepository().create, [])
    
    const handleOnSubmit = async (): Promise<void> => {
        try {
            if (user !== null) {
                const payload: ICreateOrderPort = {
                    user: user.id,
                    address: 'Адрес',
                    products: cartProducts.map((p) => ({ product: Number(p.product.id), count: p.count })),
                    status: OrderStatus.CREATED
                }

                await _request(payload).then(() => {
                    snackbar.make({ message: 'Заказ успешно создан', color: 'primary' })
                    router.push('/account/orders')
                    resetCart()
                })
            }
        } catch {
            snackbar.make({ message: 'Что-то пошло не так', color: 'error' })
        }
    }

    return { onSubmit: handleOnSubmit }
}