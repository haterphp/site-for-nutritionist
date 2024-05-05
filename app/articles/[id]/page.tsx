'use client'

import { PageHeader } from "@/features/page-header"
import LayoutWithSidebar from "@/widgets/layouts/sidebar-layout"
import { useParams } from "next/navigation"
import { useMemo } from "react"

export default function CurrentArticlePage(): JSX.Element {

    const params = useParams()
    const articleId = useMemo(() => params.id, [params])

    return (
        <LayoutWithSidebar Sidebar={<>comments</>} isReverse className="!grid-cols-[1fr_400px]">
            <PageHeader
                title='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, aliquam?'
                isBackButtonVisible
            />

            {/* <Image src />s */}
        </LayoutWithSidebar>
    )
}