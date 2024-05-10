import { Button, Input, makeClassname } from "@/shared/components";

import { CommentCard } from "@/features/cards/comment-card";

import { useEffect, useMemo } from "react";

import './index.css'
import { ICommonHTMLProps } from "@/shared/components/ui/common/interfaces";
import { IArticleEntity } from "@/entities/articles";
import { useCommentsStore } from "@/entities/comments";

interface ICommentsSidebarProps extends Omit<ICommonHTMLProps, 'children'> {
    articleId: IArticleEntity['id']
}

export default function CommentSidebar(props: ICommentsSidebarProps) {

    const { articleId, className, id } = props

    const { entities, load, reset } = useCommentsStore((state) => ({
        entities: state.entities,
        load: state.loadEntitiesForArticle,
        reset: state.reset
    }))

    useEffect(() => {
        void load(articleId)
        
        return () => {
            reset()
        } 
    }, [articleId, load, reset])
    

    return (
        <div className={makeClassname("comments-list", className)} id={id}>
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

            {entities.length > 0 
                ? (<div className="comments-list-content">
                        { entities.map((item) => <CommentCard key={item.id} {...item} />) }
                    </div>) 
                : (<p className="comment-list-empty-content">Ваш комментарий будет первым...</p>)}

            
        </div>
    )
}