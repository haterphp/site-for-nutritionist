import { PropsWithChildren } from "react";

interface IAuthLayoutProps extends PropsWithChildren {}

export default function AuthLayout(props: IAuthLayoutProps) {
    return (
        <div className="pt-[100px] pb-5">
            {props.children}
        </div>
    )
}