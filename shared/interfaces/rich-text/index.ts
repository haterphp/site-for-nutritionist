type RichTextType = 'text' | 'heading' | 'paragraph' | 'list' | 'list-item' | 'link'
type ListTypes = 'ordered' | 'unordered'

type SimpleRichTextTypes = Text | Link
type ListsRichTextTypes = List | ListItem

type Text = { type: 'text', text: string } & Partial<Record<'bold' | 'italic' | 'strikethrough' | 'underline', boolean>>
type Heading = { type: 'heading', level: number, children: SimpleRichTextTypes[] }
type Paragraph = { type: 'paragraph', children: SimpleRichTextTypes[] }
type ListItem = { type: 'list-item', children: SimpleRichTextTypes[] }
type List = { type: 'list', format: ListTypes, indentLevel?: number, children: ListsRichTextTypes[] }
type Link = { type: 'link', url: string, children: Text[] }

type RichTextItem = Text
| Heading
| Paragraph
| ListItem
| List
| Link

type RichText = RichTextItem[]

export type {
    RichText,
    RichTextItem,
    RichTextType,
    SimpleRichTextTypes,
    ListsRichTextTypes,
    Heading,
    Link,
    Text,
    Paragraph,
    ListItem,
    List,
}