import { Paragraph } from "@/shared/interfaces";
import { richTextParser } from "../parser";

export function ParagraphComponent(props: Paragraph) {
    return (
        <p className="paragraph">
            {props.children.map(item => richTextParser(item))}
        </p>
    )
}