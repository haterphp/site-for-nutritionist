import { makeClassname } from "../../../common/functions";
import { IModalContainerProps } from "./interfaces";

export const ModalContainer = (props: IModalContainerProps): JSX.Element => {
  const { children, className, ...rest } = props;

  return (
    <div className={makeClassname("pt-[32px]", className)} {...rest}>
      {children}
    </div>
  );
};
