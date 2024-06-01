import { IOrderEntity } from "@/entities/orders";

export function OrderCard(props: IOrderEntity) {
    return (
        <div className="order-card">
            {props.id}
        </div>
    )
}