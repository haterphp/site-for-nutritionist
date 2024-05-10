import { List } from "@/shared/interfaces";
import { useMemo } from "react";
import { richTextParser } from "../parser";

export function ListComponent(props: List) {
    const { format, indentLevel = 0, children } = props

    const marginLeft = useMemo(() => `${15 * indentLevel}px`, [indentLevel])

    const Content = useMemo(() => children.map(item => richTextParser(item)), [children])

    switch(format) {
        case 'unordered': return <ul className="rt-list" style={{ marginLeft }}>{Content}</ul>

        case 'ordered':
        default: return <ol className="rt-list" style={{ marginLeft }}>{Content}</ol>
    }
}