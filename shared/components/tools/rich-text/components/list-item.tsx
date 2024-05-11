import { ListItem } from "@/shared/interfaces";
import { richTextParser } from "../parser";

export function ListItemComponent(props: ListItem) {
    const { children } = props

    return (
        <li className="rt-list-item">{children.map(item => richTextParser(item))}</li>
    )
}