import {
  MouseEventHandler,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { makeClassname } from "../../../common/functions";

import { usePortal } from "../../../common/hooks";

import { IModalProps } from "./interfaces";

import { openModalAnimation, closeModalAnimation } from "../../animations";

import "./styles.css";

export const Modal = (props: IModalProps): ReactNode => {
  const {
    isOpen,
    children,
    className: externalClassname,
    onClose,
    onClick,
    ...rest
  } = props;

  const [isShouldClose, setIsShouldClose] = useState(true);

  const modalRef = useRef<HTMLDivElement>(null);

  const className = useMemo(
    () => makeClassname("modal", externalClassname),
    [externalClassname]
  );

  const handleOnClick: MouseEventHandler = (e) => {
    onClick && onClick(e);
    onClose();
  };

  const handleOnPrevent: MouseEventHandler = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (modalRef.current !== null) {
      const modalElement = modalRef.current as HTMLElement;
      const dialogElement = modalElement.getElementsByClassName(
        "modal-dialog"
      )[0] as HTMLElement;

      if (dialogElement !== null) {
        if (isOpen)
          openModalAnimation(modalElement, dialogElement).then(() =>
            setIsShouldClose(false)
          );
        else
          closeModalAnimation(modalElement, dialogElement).then(() =>
            setIsShouldClose(true)
          );
      }
    }
  }, [modalRef, isOpen]);

  const Content = usePortal(
    <div ref={modalRef} className={className} onClick={handleOnClick} {...rest}>
      <div className="modal-dialog" onClick={handleOnPrevent}>
        {children}
      </div>
    </div>
  );

  if (!isOpen && isShouldClose) return null;
  return Content;
};
