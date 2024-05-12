import { PageHeader } from "@/features/page-header";
import { CartProductList } from "@/widgets/cart-list";
import LayoutWithSidebar from "@/widgets/layouts/sidebar-layout";
import { CartSidebar } from "@/widgets/sidebars/cart-sidebar";

export default function CartPage(): JSX.Element {
    return (
        <LayoutWithSidebar Sidebar={<CartSidebar />} isReverse>
            <PageHeader title="Корзина" BackButton={{ visible: true }} />

            <CartProductList />
        </LayoutWithSidebar>
    )
}