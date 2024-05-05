import { Button, Input, makeClassname } from "@/shared/components";

import { CommentCard, ICommentCardProps } from "@/features/cards/comment-card";

import { useMemo } from "react";

import './index.css'
import { ICommonHTMLProps } from "@/shared/components/ui/common/interfaces";

export default function CommentSidebar(props: Omit<ICommonHTMLProps, 'children'>) {

    const comments = useMemo<ICommentCardProps[]>(() => [
            { id: Math.random().toString(), user: "Default User", content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, corrupti in inventore reprehenderit enim eius. Blanditiis commodi quo iusto, dolorum omnis impedit enim dignissimos animi.' },
            { id: Math.random().toString(), user: "Default User", content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, corrupti in inventore reprehenderit enim eius. Blanditiis commodi quo iusto, dolorum omnis impedit enim dignissimos animi.' },
            { id: Math.random().toString(), user: "Default User", content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, corrupti in inventore reprehenderit enim eius. Blanditiis commodi quo iusto, dolorum omnis impedit enim dignissimos animi.' },
            { id: Math.random().toString(), user: "Default User", content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, corrupti in inventore reprehenderit enim eius. Blanditiis commodi quo iusto, dolorum omnis impedit enim dignissimos animi.' }
    ], [])

    return (
        <div {...props} className={makeClassname("comments-list", props.className)}>
            <h2 className="comments-list-title">Комментарии</h2>

            <form className="flex flex-col gap-1 items-start">
                <Input
                    type="textarea"
                    label={"Комментарий"}
                    placeholder="Оставьте ваш комментарий"
                    rows={3}
                    className="w-full"
                />

                <Button>Отправить</Button>
            </form>

            <div className="comments-list-content">
                { comments.map((item) => <CommentCard key={item.id} {...item} />) }
            </div>
        </div>
    )
}