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
import { FC } from "react";

interface IRequestCallbackModalProps {
  Button: FC<IUseModalReturns>;
}

export default function RequestCallbackModal(
  props: IRequestCallbackModalProps
): JSX.Element {
  const { Button: OpenButton } = props;

  const state = useModal();

  return (
    <>
      <OpenButton {...state} />

      <Modal isOpen={state.isOpen} onClose={state.close}>
        <ModalTitle title="Запрос на обратный звонок" onClose={state.close} />

        <ModalContainer>
          <Input label={"ФИО"} />

          <Input label={"Почта"} />

          <Input label={"Номер телефона"} />
        </ModalContainer>

        <ModalActions>
          <Button color="secondary">Отменить</Button>
          <Button color="primary">Отправить</Button>
        </ModalActions>
      </Modal>
    </>
  );
}
