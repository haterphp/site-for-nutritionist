import { CartStore, ICartItemEntity } from "@/entities/cart";
import { Button, CountInput } from "@/shared/components";
import Image from "next/image";

import './index.css'

interface ICartCardProps extends ICartItemEntity, Pick<CartStore, 'update' | 'remove'> {}

export function CartCard(props: ICartCardProps) {
    const { id, remove, update, count, product } = props

    const handleOnCountChange = (value: number) => {
        update({ id, count: value, product })
    }

    const handleOnRemove = (): void => {
        remove(id)
    }

    return (
        <div className="cart-card">
            <Image alt={product.image} src={product.image} fill objectFit="cover" className="cart-card-image"  />

            <h3 className="cart-card-title">{product.title}</h3>

            <CountInput defaultValue={count} onChange={handleOnCountChange} />

            <Button color="secondary" className="ml-auto" onClick={handleOnRemove}>Удалить</Button>
        </div>
    )
}