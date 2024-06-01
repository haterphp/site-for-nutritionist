import { useMemo } from "react"
import { OrderRepository } from "../../repository"
import { CreateOrderFormData, ICreateOrderPort } from "../../interfaces"
import { useSnackbar } from "@/shared/components"
import { useUserStore } from "@/entities/user"
import { useCartStore } from "@/entities/cart"
import { OrderStatus } from "../../enum"
import { useRouter } from "next/navigation"
import { useForm, UseFormReturn } from "react-hook-form"
import { ExceptionService, ValidationRunner } from "@/shared/utils"
import { CreateOrderValidatorFactory } from "../../validators"
import { useApplyFormErrors } from "@/shared/helpers/forms"
import { ICreateOrderErorrs } from "../../interfaces/errors"
import { InternalCode } from "@/shared/enums"
import { COMMON_ERRORS_MESSAGES } from "@/shared/messages/common"
import { transformDateTimeToString } from "@/shared/helpers/date"
import { useOrderStore } from "../../store"

interface ICreateOrderRequest {
    form: UseFormReturn<CreateOrderFormData>
    onSubmit: (data: CreateOrderFormData) => Promise<void>
}

const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)

const DEFAULT_VALUES: CreateOrderFormData = {
    address: '',
    phone: '',
    deliveryTime: transformDateTimeToString(tomorrow),
}

export const useCreateOrderRequest = (): ICreateOrderRequest => {
    const snackbar = useSnackbar()
    const router = useRouter()

    const form = useForm({ defaultValues: DEFAULT_VALUES })
    const applyMessageErrors = useApplyFormErrors(form)

    const user = useUserStore(state => state.user)
    const [cartProducts, resetCart] = useCartStore(state => [state.entities, state.reset])

    const _request = useOrderStore(state => state.create)
    const _validator = useMemo(() => new ValidationRunner(new CreateOrderValidatorFactory()), [])
    
    const handleOnSubmit = async (port: CreateOrderFormData): Promise<void> => {
        try {
            if (user !== null) {
                _validator.validate(port)

                const payload: ICreateOrderPort = {
                    user: user.id,
                    products: cartProducts.map((p) => ({ product: Number(p.product.id), count: p.count })),
                    status: OrderStatus.CREATED,
                    ...port
                }

                void _request(payload).then(() => {
                    router.push('/account/orders')
                    snackbar.make({ message: 'Заказ успешно создан', color: 'primary' })
                    resetCart()
                })  
            }
        } catch (error) {
            const e = error as ExceptionService<ICreateOrderErorrs>

            if (e.code !== InternalCode.VALIDATION_ERROR) {
                snackbar.make({ message: e.message, color: 'error' })
            } else if (e.data !== undefined) {
                applyMessageErrors(e.data, (e) => COMMON_ERRORS_MESSAGES[e.code])
            }
        }
    }

    return { form, onSubmit: handleOnSubmit }
}