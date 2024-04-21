import { ICommonHTMLProps } from "@/shared/components/ui/common/interfaces";
import { ReactNode } from "react";

export interface IModalTitleProps extends Omit<ICommonHTMLProps, 'children'> {
    title: ReactNode
    onClose?: () => void
}