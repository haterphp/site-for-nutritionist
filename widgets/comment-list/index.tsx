import { makeClassname } from "@/shared/components";

import { CommentCard } from "@/features/cards/comment-card";

import { useEffect } from "react";

import './index.css'
import { ICommonHTMLProps } from "@/shared/components/ui/common/interfaces";
import { IArticleEntity } from "@/entities/articles";
import { useCommentsStore } from "@/entities/comments";
import { CreateCommentForm } from "../forms/create-comment";

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

            <CreateCommentForm articleId={articleId} />

            {entities.length > 0 
                ? (<div className="comments-list-content">
                        { entities.map((item) => <CommentCard key={item.id} {...item} />) }
                    </div>) 
                : (<p className="comment-list-empty-content">Ваш комментарий будет первым...</p>)}

            
        </div>
    )
}