import { useCreateOrderRequest } from "@/entities/orders";
import { Button, Input, IUseModalReturns, Modal, ModalActions, ModalContainer, ModalTitle } from "@/shared/components";
import { useRegisterField } from "@/shared/helpers/forms";
import { useForm } from "react-hook-form";

interface IMakeOrderModal {
    state: IUseModalReturns 
}

export default function MakeOrderModal(props: IMakeOrderModal) {
    const {state} = props

    const { form, onSubmit } = useCreateOrderRequest()
    const register = useRegisterField(form)

    const handleOnClose = (): void => {
        state.close()
        setTimeout(form.reset, 250)
    }   

    return (
        <Modal isOpen={state.isOpen} onClose={handleOnClose}>
            <ModalTitle title="Оформление заказа" onClose={handleOnClose} />

            <form onSubmit={form.handleSubmit(onSubmit)}>
                <ModalContainer className="flex flex-col gap-1">
                    <Input label={"Адрес доставки"} {...register('address')} />

                    <Input type={'datetime-local'} isLabelFloated label={"Время и дата доставки"} {...register('deliveryTime')} />

                    <Input label={"Телефон"} placeholder="+79999999999" {...register('phone')} />

                </ModalContainer>

                <p className="mt-1 text-sm text-secondary-main/50">Доставка осуществляется в пределах города Томска</p>

                <ModalActions>
                    <Button color="secondary" onClick={handleOnClose}>Отменить</Button>
                    <Button type="submit" color="primary">Оформить заказ</Button>
                </ModalActions>
            </form>
      </Modal>
    )
}