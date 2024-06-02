import { useCreateCallbackRequestRequest } from "@/entities/callback-requests";
import {
  Button,
  Input,
  IUseModalReturns,
  Modal,
  ModalActions,
  ModalContainer,
  ModalTitle,
  useModal,
} from "@/shared/components";
import { useRegisterField } from "@/shared/helpers/forms";
import { FC } from "react";

interface IRequestCallbackModalProps {
  Button: FC<IUseModalReturns>;
}

export default function RequestCallbackModal(
  props: IRequestCallbackModalProps
): JSX.Element {
  const { Button: OpenButton } = props;

  const state = useModal();

  const handleOnClose = (): void => {
    state.close()
    setTimeout(form.reset, 250)
  }

  const { form, onSubmit } = useCreateCallbackRequestRequest(handleOnClose)
  const register = useRegisterField(form)

  return (
    <>
      <OpenButton {...state} />

      <Modal isOpen={state.isOpen} onClose={handleOnClose}>
        <ModalTitle title="Обратная связь" onClose={handleOnClose} />

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <ModalContainer className="flex flex-col gap-1">
              <Input label={"ФИО"} {...register('name')} />

              <Input label={"Почта"} {...register('email')} />

              <Input type="textarea" label={"Комментарий"} {...register('description')} />
          </ModalContainer>

          <ModalActions>
            <Button color="secondary" onClick={handleOnClose}>Отменить</Button>
            <Button type="submit" color="primary">Отправить</Button>
          </ModalActions>
        </form>
      </Modal>
    </>
  );
}
