import { Link as LinkType } from "@/shared/interfaces";
import Link from "next/link";
import { richTextParser } from "../parser";

export function LinkComponent(props: LinkType) {
    const { url, children } = props

    return (
        <Link href={url}>
            {children.map(item => richTextParser(item))}
        </Link>
    )
}