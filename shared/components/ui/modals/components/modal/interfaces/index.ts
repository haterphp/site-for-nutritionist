import { ICommonHTMLEventProps, ICommonHTMLProps } from "@/shared/components/ui/common/interfaces"

interface IModalProps extends ICommonHTMLProps, ICommonHTMLEventProps {
    isOpen: boolean
    onClose: () => void
}

export type { IModalProps }