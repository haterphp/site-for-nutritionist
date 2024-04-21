import { useMemo } from "react";
import { IModalActionsProps } from "./interfaces";
import { makeClassname } from "../../../common/functions";

export const ModalActions = (props: IModalActionsProps): JSX.Element => {
  const { children, className: externalClassname, ...rest } = props;

  const className = useMemo(
    () =>
      makeClassname(
        "pt-[20px] flex gap-2 justify-end items-center",
        externalClassname
      ),
    [externalClassname]
  );

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};
