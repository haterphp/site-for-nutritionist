import dynamic from 'next/dynamic'

const LayoutWithSidebar = dynamic(() => import('@/widgets/layouts/sidebar-layout'))

export default function CatalogPage() {
    return (
        <LayoutWithSidebar Sidebar={<>sidebar</>}>
            <h1 data-title>Каталог</h1>
        </LayoutWithSidebar>
    )
}