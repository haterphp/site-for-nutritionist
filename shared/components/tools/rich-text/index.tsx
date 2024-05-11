import { makeClassname } from "@/shared/components"

import { ICommonHTMLProps } from "@/shared/components/ui/common/interfaces"

import { RichText as TRichText } from "@/shared/interfaces"

import { richTextParser } from "./parser"

import './index.css'

interface IRichTextProps extends Omit<ICommonHTMLProps, 'children'> {
    content: TRichText
}

export function RichText(props: IRichTextProps): JSX.Element {
    return (
        <div id={props.id} className={makeClassname('rich-text', props.className)}>
            { props.content.map(item => richTextParser(item)) }
        </div>
    )
}