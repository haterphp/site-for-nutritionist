import { ReactNode, useMemo } from "react";
import { usePortal } from "../../../common/hooks";

import "./styles.css";

export const Modal = (): ReactNode => {
  const ModalContent = useMemo(() => {
    return <div className="modal"></div>;
  }, []);

  return usePortal(ModalContent);
};
