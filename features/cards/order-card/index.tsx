import { IOrderEntity, OrderStatus } from "@/entities/orders";

import { MouseEventHandler, useMemo } from "react";

import { makeClassname } from "@/shared/components";
import Image from "next/image";

import './index.css'
import { useRouter } from "next/navigation";

const Statuses = {
    [OrderStatus.CREATED]: ['Создан', 'status-secondary'],
    [OrderStatus.IN_PROCCESS]: ['В обработке', 'status-secondary'],
    [OrderStatus.PAID]: ['Оплачен', 'status-secondary'],
    [OrderStatus.COMPLETED]: ['Доставлен', 'status-primary'],
    [OrderStatus.REJECTED]: ['Отменен', 'status-error'],
}

export function OrderCard(props: IOrderEntity) {
    const { address, products, status, id } = props

    const router = useRouter()

    const [statusLabel, statusClassname] = useMemo(() => Statuses[status], [status])

    const handleOnClick = (id: number): MouseEventHandler => {
        return () => {
            router.push(`/catalog/${id}`)
        }
    }

    return (
        <div className="paper order-card">
            <div className="flex gap-2 items-center">
                <h3 className="order-card-title">Заказ №{id}</h3>

                <div className={makeClassname("order-card-status", statusClassname)}>{statusLabel}</div>
            </div>

            <p className="order-card-subtext">{address}</p>
        
            <div className="order-card-products-list">
                { products.map((product) => (
                    <div className="order-card-product-item" key={product.id} aria-label={product.title} onClick={handleOnClick(product.id)}>
                        <Image src={product.url} alt={product.title} className="order-card-product-image" width={75} height={75} />

                        <p className="order-card-product-count">{product.count}</p>
                    </div>
                )) }
            </div>
        </div>
    )
}