import { useMemo } from "react";

import { CloseIcon } from "@/shared/assets/icons/close-icon";

import { makeClassname } from "../../../common/functions";

import { IModalTitleProps } from "./interfaces";

import "./styles.css";

export const ModalTitle = (props: IModalTitleProps): JSX.Element => {
  const { title, onClose, className: externalClassname, ...rest } = props;

  const className = useMemo(
    () => makeClassname("modal-title", externalClassname),
    [externalClassname]
  );

  const Title = useMemo(() => {
    if (typeof title === "string") {
      return <h2 className="modal-title-text">{title}</h2>;
    }
    return title;
  }, [title]);

  return (
    <div className={className} {...rest}>
      {Title}

      {onClose && (
        <button className="modal-title-button" onClick={onClose}>
          <CloseIcon />
        </button>
      )}
    </div>
  );
};
